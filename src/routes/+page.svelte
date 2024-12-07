<script>
	import Header from '$lib/header.svelte';
</script>

<svelte:head>
	<title>Christoph Fleschutz</title>
</svelte:head>

<div class="container">
	<Header />

	<div class="hero">
		<h1>Welcome to My Portfolio!</h1>
		<p>This is the main page of my website.</p>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

    .hero {
        display: flex;
		flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
