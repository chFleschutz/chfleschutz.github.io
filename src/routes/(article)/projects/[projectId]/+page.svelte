<script lang="ts">
	import type { ProjectMetadata } from "$lib/types";

	export let data: {
		id: string;
		meta: ProjectMetadata;
		content: ConstructorOfATypedSvelteComponent;
	};
</script>

<svelte:head>
	<title>{data.meta.title}</title>

</svelte:head>

<article>
	<h2>{data.meta.title}</h2>
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
		max-width: 1024px;
		margin-inline: auto;
		padding: 1rem;
	}
</style>