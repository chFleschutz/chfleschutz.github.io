import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import glsl from 'vite-plugin-glsl';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [sveltekit(), glsl()],
	resolve: {
		alias: {
			$styles: '/src/styles',
			$shaders: '/src/shaders',
			$content: '/src/content'
		}
	},
});
