<script lang="ts">
	import * as THREE from 'three';
	import { onMount } from 'svelte';

	import vertexShader from './../../shaders/sdf-vert.glsl';
	import fragmentShader from './../../shaders/sdf-frag.glsl';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const aspect = canvas.clientWidth / canvas.clientHeight;
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
		const renderer = new THREE.WebGLRenderer({ canvas });
		renderer.setSize(canvas.clientWidth, canvas.clientHeight);

		const geometry = new THREE.SphereGeometry(1, 32, 32);
		const material = new THREE.ShaderMaterial({
			vertexShader,
			fragmentShader,
			uniforms: {
				time: { value: 0 }
			}
		});
		const sphere = new THREE.Mesh(geometry, material);
		scene.add(sphere);

		camera.position.z = 5;

		function animate() {
			requestAnimationFrame(animate);
			material.uniforms.time.value += 0.01;
			sphere.rotation.x += 0.01;
			sphere.rotation.y += 0.01;
			renderer.render(scene, camera);
		}

		animate();
	});
</script>

<canvas bind:this={canvas}></canvas>

<style>
	canvas {
		width: 100%;
		height: 100%;
	}
</style>
