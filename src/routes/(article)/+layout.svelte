<script lang="ts">
	import HeaderArticle from '$lib/layout/article-header.svelte';
	import Footer from '$lib/layout/footer.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="page">
	<HeaderArticle />
	<main>
		{@render children?.()}
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
