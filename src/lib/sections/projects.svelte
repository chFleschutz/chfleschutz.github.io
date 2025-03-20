<script lang="ts">
	import ProjectShowcase from '$lib/components/project-showcase.svelte';
	import Carousel from '$lib/components/carousel.svelte';
</script>

<div class="fullpage-container">
	<div class="projects">
		<h2 class="text-gradient">Projects</h2>
		<p class="projects-description">
			Here are some highlights from my projects. For more, visit my
			<a href="https://github.com/chFleschutz?tab=repositories"> Github Profile </a>
		</p>
		<Carousel>
			<ProjectShowcase
				title="Aegix Engine"
				description="Vulkan game engine with physically based rendering, GLTF model loading, a framegraph and more."
				link="https://github.com/chFleschutz/aegix-engine"
				image="/images/aegix-engine.jpg"
			/>
			<ProjectShowcase
				title="Data Visualization"
				description="Collection of data visualization projects using Qt, featuring Voronoi fracture, slice viewer, and volume rendering."
				link="https://github.com/chFleschutz/simulation-and-data-visualization"
				image="/images/volume-render.jpg"
			/>
			<ProjectShowcase
				title="AI for Games"
				description="Collection of game AI algorithms, including flow field pathfinding, tactical maps and hill climbing."
				link="https://github.com/chFleschutz/ai-for-games"
				image="/images/flowfield-directions.jpg"
			/>
			<ProjectShowcase
				title="Abduction in Lab 42"
				description="Virtual Reality game developed in Unity. A puzzle game where you must free your robot companion."
				link="https://github.com/chFleschutz/abduction-in-lab-42"
				image="/images/abduction-lab-42.jpg"
				imagePosition="50% 30%"
			/>
			<ProjectShowcase
				title="Hive Mind"
				description="Turn-based strategy game developed in Unreal. Build structures and deploy units to defeat your opponent."
				link="https://github.com/chFleschutz/hive-mind"
				image="/images/hive-mind.jpg"
				imagePosition="50% 20%"
			/>
		</Carousel>
	</div>
</div>

<style>
	.projects {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-top: 2rem;
	}

	.projects-description {
		max-width: 500px;
		width: 100%;
	}

	@media (max-width: 768px) {
		.projects {
			width: 100%;
			padding: 0 1rem;
			align-items: center;
			text-align: center;
		}
	}
</style>
