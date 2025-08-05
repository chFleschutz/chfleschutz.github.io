<script lang="ts">
	import Header from '$lib/layout/header.svelte';
	import Footer from '$lib/layout/footer.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>Christoph Fleschutz</title>
</svelte:head>

<div class="page">
	<Header />
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
		overflow: hidden;
	}

	main {
		flex: 1;
		margin-bottom: 20rem;
	}

	@media (max-width: 768px) {
		main {
			margin-bottom: 10rem;
		}
	}
</style>
