<script lang="ts">
	import * as THREE from 'three';
	import { onMount } from 'svelte';

	import vertexShader from './../../shaders/sdf.vert';
	// import fragmentShader from './../../shaders/sdf.frag';
	import fragmentShader from './../../shaders/sdf-iterations.frag';

	let canvas: HTMLCanvasElement;
	let container: HTMLDivElement;

	onMount(() => {
		const parent = canvas.parentElement;

		const aspect = canvas.clientWidth / canvas.clientHeight;
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
		renderer.setSize(container.clientWidth, container.clientHeight);
		renderer.setClearColor(0x000000, 0);

		const geometry = new THREE.BufferGeometry();
		geometry.setAttribute(
			'position',
			new THREE.BufferAttribute(
				new Float32Array([
					-1.0, -1.0, 0.0, 1.0, -1.0, 0.0, 1.0, 1.0, 0.0, -1.0, -1.0, 0.0, 1.0, 1.0, 0.0, -1.0, 1.0,
					0.0
				]),
				3
			)
		);
		const material = new THREE.ShaderMaterial({
			vertexShader,
			fragmentShader,
			uniforms: {
				uTime: { value: 0 },
				uResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
				uMouse: { value: new THREE.Vector2() }
			}
		});
		const plane = new THREE.Mesh(geometry, material);
		scene.add(plane);

		camera.position.z = 5;
		
		const clock = new THREE.Clock();
		let mouse = new THREE.Vector2();
		let attractionPoint = new THREE.Vector2();
		function animate() {
			requestAnimationFrame(animate);
			
			material.uniforms.uTime.value += clock.getDelta();

			attractionPoint.lerp(mouse, 0.02);
			material.uniforms.uMouse.value = attractionPoint;

			renderer.render(scene, camera);
		}
		animate();

		// Resize
		const onResize = () => {
			renderer.setSize(container.clientWidth, container.clientHeight);
			material.uniforms.uResolution.value.set(container.clientWidth, container.clientHeight);
		};
		window.addEventListener('resize', onResize);

		// Mouse position
		const onMouseMove = (event: MouseEvent) => {
			const rect = canvas.getBoundingClientRect();
			mouse = new THREE.Vector2(
				((event.clientX - rect.left) / rect.width) * 2 - 1,
				-((event.clientY - rect.top) / rect.height) * 2 + 1
			);
			// Clamp mouse position
			mouse.x = Math.min(Math.max(mouse.x, -1), 1);
			mouse.y = Math.min(Math.max(mouse.y, -1), 1);
		};
		window.addEventListener('mousemove', onMouseMove);

		return () => {
			window.removeEventListener('resize', onResize);
			window.removeEventListener('mousemove', onMouseMove);
			renderer.dispose();
		};
	});
</script>

<div class="three-container" bind:this={container}>
	<canvas bind:this={canvas}></canvas>
</div>

<style>
	.three-container {
		width: 100%;
		height: 100%;
	}

	canvas {
		display: block;
	}
</style>
