<script lang="ts">
	import ProjectShowcase from '$lib/components/project-showcase.svelte';
</script>

<div class="fullpage-container">
	<div class="projects">
		<h2 class="text-gradient">Showcase</h2>
		<p class="projects-description">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mauris dolor, maximus at est
			vitae, lobortis rhoncus ligula.
		</p>
		<div class="projects-list">
			<ProjectShowcase
				title="Project 1"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				link="/"
				image="/textures/planet.png"
			/>
            <ProjectShowcase
                title="Project 2"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                link="/"
                image="/textures/planet.png"
            />
            <ProjectShowcase
                title="Project 3"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                link="/"
                image="/textures/planet.png"
            />
            <ProjectShowcase
                title="Project 4"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                link="/"
                image="/textures/planet.png"
            />
		</div>
	</div>
</div>

<style>
	.projects {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.projects-description {
		max-width: 600px;
		width: 100%;
		margin: 0;
	}

	.projects-list {
		display: flex;
		justify-content: space-between;
		gap: 5%;
		width: 100%;
		margin: 2.5rem 0;
	}
</style>
