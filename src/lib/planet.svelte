<script lang="ts">
	import * as THREE from 'three';
	import { onMount } from 'svelte';

	let canvas: HTMLDivElement | null = null;

	onMount(() => {
		if (!canvas) return;

		// Renderer
		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(canvas.clientWidth, canvas.clientHeight);
		renderer.setClearColor(0x000000, 0);
		canvas.appendChild(renderer.domElement);

		// Camera
		const aspect = canvas.clientWidth / canvas.clientHeight;
		const camera = new THREE.PerspectiveCamera(30, aspect, 0.1, 1000);
		camera.position.z = 80;
		
		// Scene
		const scene = new THREE.Scene();

		// Textures
		const textureLoader = new THREE.TextureLoader();
		const planetTexture = textureLoader.load('/textures/planet-paint.png');
		const ringTexture = textureLoader.load('/textures/ring.png');

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

		// Directional light
		const light = new THREE.DirectionalLight(0xffffff, 4);
		light.position.set(-1, 1, 1).normalize();
		scene.add(light);

		// Ambient light
		const ambientLight = new THREE.AmbientLight(0xffffff, 1);
		scene.add(ambientLight);

		// Planet controller
		const rotationController = new THREE.Object3D();
		rotationController.add(planet);
		rotationController.add(ring);
		rotationController.rotation.x = (-30 * Math.PI) / 180;
		rotationController.rotation.z = (-10 * Math.PI) / 180;

		// Mouse Controller
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

		// Animation
		// const clock = new THREE.Clock();
		const raycaster = new THREE.Raycaster();
		const animate = () => {
			requestAnimationFrame(animate);

			const deltaTime = 0.01;
			var speed = 0.2;
			var scale = 1.0;

			raycaster.setFromCamera(mouse, camera);
			const intersects = raycaster.intersectObjects([planet]);
			if (intersects.length > 0) {
				speed = 0.5;
				scale = 1.1;
			}

			const mouseInfluence = 10;
			mouseController.lookAt(-mouse.x * mouseInfluence, -mouse.y * mouseInfluence, -100);

			rotationController.rotateOnAxis(new THREE.Vector3(0, 1, 0), speed * deltaTime);
			rotationController.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.2);

			renderer.render(scene, camera);
		};

		animate();

		const handleResize = () => {
			if (!canvas) return;

			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(canvas.clientWidth, canvas.clientHeight);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			renderer.dispose();
		};
	});
</script>

<div bind:this={canvas} style="width: 100%; height: 100%;"></div>
