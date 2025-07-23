<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import type { ProjectMetadata } from '$lib/types';
	import CarouselImage from '$lib/components/carousel-image.svelte';

	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

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
	<div class="page-heading">
		<h2 class="text-gradient">{data.meta.title}</h2>
		{#if data.meta.repo}
			<a href={data.meta.repo} target="_blank" class="repo-link hover-effect">
				<span>Visit Repo</span>
				<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
			</a>
		{/if}
	</div>
	{#if data.meta.tags}
		<div class="tags">
			{#each data.meta.tags as tag}
				<span class="badge">{tag}</span>
			{/each}
		</div>
	{/if}
	{#if data.meta.images}
		<CarouselImage images={data.meta.images} />
	{/if}
	<svelte:component this={data.content} />
</article>

<style>
	article {
		padding: 1rem;
	}

	.page-heading {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.repo-link {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin: 1rem 0;
	}

	.badge {
		background-color: var(--color-primary);
		border: 2px solid var(--color-primary);
		border-radius: 999rem;
		padding: 0.15rem 1rem;
		font-size: 0.875rem;
	}
</style>
