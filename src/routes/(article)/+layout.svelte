<script>
	import HeaderArticle from '$lib/layout/article-header.svelte';
	import Footer from '$lib/layout/footer.svelte';
</script>

<div class="page">
	<HeaderArticle />
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
		max-width: var(--article-max-width);
		width: var(--article-width);
		margin: 0 auto;
	}
</style>
