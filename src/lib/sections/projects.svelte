<script lang="ts">
	import ProjectShowcase from '$lib/components/project-showcase.svelte';
</script>

<div class="fullpage-container">
	<div class="projects">
		<h2 class="text-gradient">Showcase</h2>
		<p class="projects-description">
			Here are some highlights of my projects. You can find more on my <a
				href="https://github.com/chFleschutz?tab=repositories"> Github Profile </a
			>
		</p>
		<div class="projects-list">
			<ProjectShowcase
				title="Aegix Engine"
				description="C++ and Vulkan game engine featuring Physically Based Rendering, GLTF model loading and more."
				link="https://github.com/chFleschutz/aegix-engine"
				image="/images/aegix.png"
			/>
			<ProjectShowcase
				title="Abduction in Lab 42"
				description="Virtual Reality game developed in Unity. A puzzle game where you must free your robot companion."
				link="https://github.com/chFleschutz/abduction-in-lab-42"
				image="/images/abduction-lab-42.png"
				imagePosition="50% 30%"
			/>
			<ProjectShowcase
				title="Hive Mind"
				description="Turn-based strategy game developed in Unreal. Build structures and deploy untis to defeat your opponent."
				link="https://github.com/chFleschutz/hive-mind"
				image="/images/hive-mind.png"
				imagePosition="50% 20%"
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
		max-width: 500px;
		width: 100%;
	}

	.projects-list {
		display: flex;
		justify-content: space-between;
		gap: 2rem;
		width: 100%;
		margin: 2rem 0;
	}
</style>
