<script>
	import '../app.css';

	import Header from '$lib/header.svelte';
	import PageIndicator from '$lib/page-indicator.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		rel="preload"
		as="style"
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
		crossorigin="anonymous"
	/>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
	/>
</svelte:head>

<main>
	<Header />
	<PageIndicator />

	<slot></slot>
</main>

<style>
	:global(body) {
		overflow: hidden;
	}

	main {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		scroll-snap-type: y mandatory;
		overflow-y: scroll;
	}

	@media (max-width: 768px) {
		main {
			scroll-snap-type: none;
		}
	}
</style>
