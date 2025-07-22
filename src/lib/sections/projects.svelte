<script lang="ts">
	import ProjectCard from '$lib/components/project-card.svelte';
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
			<ProjectCard
				title="Aegix Engine"
				link="https://github.com/chFleschutz/aegix-engine"
				image="/images/aegix-engine.jpg"
			/>
			<ProjectCard
				title="Data Visualization"
				link="https://github.com/chFleschutz/simulation-and-data-visualization"
				image="/images/volume-render.jpg"
			/>
			<ProjectCard
				title="Inverse Kinematics"
				link="https://github.com/chFleschutz/inverse-kinematics-algorithms"
				image="/images/ik.jpg"
			/>
			<ProjectCard
				title="AI for Games"
				link="https://github.com/chFleschutz/ai-for-games"
				image="/images/flowfield-directions.jpg"
			/>			
			<ProjectCard
				title="Abduction in Lab 42"
				link="https://github.com/chFleschutz/abduction-in-lab-42"
				image="/images/abduction-lab-42.jpg"
				imagePosition="50% 30%"
			/>
			<ProjectCard
				title="Hive Mind"
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
