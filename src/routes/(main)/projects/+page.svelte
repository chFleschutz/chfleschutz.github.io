<script lang="ts">
	import ProjectCard from '$lib/components/project-card.svelte';
</script>

<div class="fullpage-container">
	<div class="projects-header">
		<h2 class="text-gradient">Projects</h2>
		<p>Explore my most notable projects and contributions.</p>
		<p>View more on my <a href="https://github.com/chFleschutz" target="_blank">GitHub Profile</a>.</p>
	</div>
	<div class="projects-list">
		<ProjectCard
			title="Aegix Engine"
			link="/projects/aegix-engine"
			image="/images/aegix/aegix-helmets.webp"
		/>
		<ProjectCard 
			title="Dustveil" 
			link="/projects/dustveil" 
			image="/images/dustveil/dustveil-horde.jpg"
		/>
		<ProjectCard
			title="Medical Visualization"
			link="/projects/medical-visualization"
			image="/images/medical-vis/volume-render-phong.webp"
		/>
		<ProjectCard
			title="Inverse Kinematics"
			link="/projects/inverse-kinematics"
			image="/images/ik.jpg"
		/>
		<ProjectCard
			title="AI for Games"
			link="/projects/ai-for-games"
			image="/images/flowfield-directions.jpg"
		/>
		<ProjectCard
			title="Abduction in Lab 42"
			link="/projects/abduction-in-lab-42"
			image="/images/abduction-lab-42.jpg"
			imagePosition="50% 30%"
		/>
		<ProjectCard
			title="Hive Mind"
			link="/projects/hive-mind"
			image="/images/hive-mind.jpg"
			imagePosition="50% 20%"
		/>
		<ProjectCard
			title="Diagnostic Data Collector"
			link="/projects/diagnostic-data-collector"
			image="/textures/planet.png"
		/>
		<ProjectCard
			title="Bachelor Thesis"
			link="/projects/bachelor-thesis"
			image="/textures/planet.png"
		/>
		<ProjectCard
			title="Eternal Flame"
			link="/projects/eternal-flame"
			image="/textures/planet.png"
		/>
		<ProjectCard title="Raspberry" link="/projects/raspberry" image="/textures/planet.png" />
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
