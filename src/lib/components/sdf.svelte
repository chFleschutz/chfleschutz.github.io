<script lang="ts">
	import * as THREE from 'three';
	import { onMount } from 'svelte';

	import vertexShader from './../../shaders/sdf.vert';
	import fragmentShader from './../../shaders/sdf.frag';

	let canvas: HTMLCanvasElement;
	let container: HTMLDivElement;

	onMount(() => {
		const parent = canvas.parentElement;

		const aspect = canvas.clientWidth / canvas.clientHeight;
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer({ canvas });
		renderer.setSize(container.clientWidth, container.clientHeight);

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
				time: { value: 0 }
			}
		});
		const plane = new THREE.Mesh(geometry, material);
		scene.add(plane);

		camera.position.z = 5;

		function animate() {
			requestAnimationFrame(animate);
			material.uniforms.time.value += 0.01;
			renderer.render(scene, camera);
		}
		animate();

		// Resize
		const onResize = () => {
			renderer.setSize(container.clientWidth, container.clientHeight);
			camera.aspect = container.clientWidth / container.clientHeight;
			camera.updateProjectionMatrix();
		};
		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('resize', onResize);
			renderer.dispose();

			console.log('disposed');
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
