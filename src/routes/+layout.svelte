<script lang="ts">
	import { config } from '@fortawesome/fontawesome-svg-core';
	import '@fortawesome/fontawesome-svg-core/styles.css';

	import '$styles/app.css';
	import '$styles/markdown.css';

	// Prevent auto css injection of FontAwesome
	config.autoAddCss = false; 

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
	/>
</svelte:head>

{@render children?.()}
