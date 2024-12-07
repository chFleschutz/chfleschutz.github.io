<script lang="ts">
	import * as THREE from 'three';
	import { onMount } from 'svelte';

	let canvas: HTMLDivElement;

	onMount(() => {
		const scene = new THREE.Scene();

		const aspect = canvas.clientWidth / canvas.clientHeight;
		const camera = new THREE.PerspectiveCamera(30, aspect, 0.1, 1000);
		camera.position.z = 80;

		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(canvas.clientWidth, canvas.clientHeight);
		renderer.setClearColor(0x000000, 0);
		canvas.appendChild(renderer.domElement);

		// Textures
		const loader = new THREE.TextureLoader();
		let planetTexture = loader.load('/textures/planet.png');
		planetTexture.colorSpace = THREE.SRGBColorSpace;
		let ringTexture = loader.load('/textures/ring.png');
		ringTexture.colorSpace = THREE.SRGBColorSpace;

		// Planet
		const planetGeometry = new THREE.SphereGeometry(10, 32, 32);
		const planetMaterial = new THREE.MeshStandardMaterial({ map: planetTexture });
		const planet = new THREE.Mesh(planetGeometry, planetMaterial);

		// Ring
		const ringGeometry = new THREE.TorusGeometry(15, 2, 16, 100);
		const ringMaterial = new THREE.MeshStandardMaterial({ map: ringTexture });
		const ring = new THREE.Mesh(ringGeometry, ringMaterial);
		ring.rotation.x = (90 * Math.PI) / 180;
		ring.scale.z = 0.01;

		// Lighting
		const light = new THREE.DirectionalLight(0xffffff, 8);
		light.position.set(-1, 1, 1).normalize();
		scene.add(light);
		scene.add(new THREE.AmbientLight(0xffffff, 1));

		// Controllers
		const rotationController = new THREE.Object3D();
		rotationController.add(planet);
		rotationController.add(ring);
		rotationController.rotation.set(THREE.MathUtils.degToRad(-20), 0, THREE.MathUtils.degToRad(-10));

		const mouseController = new THREE.Object3D();
		mouseController.add(rotationController);
		scene.add(mouseController);

		// Mouse position
		const mouse = new THREE.Vector2();
		const onMouseMove = (event: MouseEvent) => {
			const rect = canvas?.getBoundingClientRect();
			if (rect) {
				mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
				mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
			}
		};
		window.addEventListener('mousemove', onMouseMove);

		// Resize
		const onResize = () => {
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(canvas.clientWidth, canvas.clientHeight);
		};
		window.addEventListener('resize', onResize);

		// Animation
		const clock = new THREE.Clock();
		const raycaster = new THREE.Raycaster();
		const animate = () => {
			requestAnimationFrame(animate);

			const deltaTime = clock.getDelta();
			let speed = 0.3;
			let scale = 1.0;

			raycaster.setFromCamera(mouse, camera);
			const intersects = raycaster.intersectObjects([planet]);
			if (intersects.length > 0) {
				speed = 0.5;
				scale = 1.1;
			}

			const mouseInfluence = 10;
			mouseController.lookAt(-mouse.x * mouseInfluence, -mouse.y * mouseInfluence, -100);

			rotationController.rotateOnAxis(new THREE.Vector3(0, 1, 0), speed * deltaTime);
			rotationController.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);

			renderer.render(scene, camera);
		};

		animate();

		return () => {
			window.removeEventListener('resize', onResize);
			window.removeEventListener('mousemove', onMouseMove);
			renderer.dispose();
			planetTexture.dispose();
			ringTexture.dispose();
		};
	});
</script>

<div bind:this={canvas}></div>

<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>
