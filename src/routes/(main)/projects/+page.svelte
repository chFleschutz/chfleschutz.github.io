<script lang="ts">
	import ProjectCard from '$lib/components/project-card.svelte';
	import type { ProjectMetadata } from '$lib/types';

	export let data: {
		projects: {
			id: string;
			metadata: ProjectMetadata;
		}[];
	};
</script>

<div class="fullpage-container">
	<div class="projects-header">
		<h2 class="text-gradient">Projects</h2>
		<p>Explore my most notable projects and contributions.</p>
		<p>
			View more on my <a href="https://github.com/chFleschutz" target="_blank">GitHub Profile</a>.
		</p>
	</div>
	<div class="projects-list">
		{#each data.projects as project}
			<ProjectCard
				title={project.metadata.title}
				link={`/projects/${project.id}`}
				image={project.metadata.coverImage}
			/>
		{/each}
	</div>
</div>

<style>
	.projects-header {
		margin: 4rem 0;
	}

	.projects-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 2rem;
		margin-bottom: 10rem;
	}
</style>
