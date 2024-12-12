<script>
	import '../app.css';

	import Header from '$lib/header.svelte';
	import PageIndicator from '$lib/page-indicator.svelte';
	import Footer from '$lib/footer.svelte';
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

<main class="fullpage">
	<Header />
	<PageIndicator />
	
	<slot></slot>
	
	<Footer />
</main>

<style>
	:global(body) {
		margin: 0;
		overflow: hidden;
	}

	.fullpage {
		height: 100vh;
		width: 100vw;
		scroll-snap-type: y mandatory;
		overflow-y: scroll;
	}

	@media (max-width: 768px) {
		.fullpage {
			scroll-snap-type: none;
		}
	}
</style>
