<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import type { ProjectMetadata } from '$lib/types';

	export let data: {
		id: string;
		meta: ProjectMetadata;
		content: typeof SvelteComponent;
	};
</script>

<svelte:head>
	<title>{data.meta.title}</title>
</svelte:head>

<article>
	<h2 class="text-gradient">{data.meta.title}</h2>
	{#if data.meta.tags}
		<p>Tags: {data.meta.tags?.join(', ')}</p>
	{/if}
	{#if data.meta.images}
		<div class="gallery">
			{#each data.meta.images as image}
				<img src={image} alt="Screenshot" />
			{/each}
		</div>
	{/if}

	<svelte:component this={data.content} />
</article>

<style>
	article {
		padding: 1rem;
	}
</style>
