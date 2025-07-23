<script>
	import Header from '$lib/layout/header.svelte';
	import Footer from '$lib/layout/footer.svelte';
</script>

<svelte:head>
	<title>Christoph Fleschutz</title>
</svelte:head>

<div class="page">
	<Header />
	<main>
		<slot></slot>
	</main>
	<Footer />
</div>

<style>
	.page {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
	}
</style>
