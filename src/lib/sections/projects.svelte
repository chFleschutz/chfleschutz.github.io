<script lang="ts">
	import ProjectShowcase from '$lib/components/project-showcase.svelte';
</script>

<div class="fullpage-container">
	<div class="projects">
		<h2 class="text-gradient">Projects</h2>
		<p class="projects-description">
			Here are a few highlights from my projects. For more, visit my
			<a href="https://github.com/chFleschutz?tab=repositories"> Github Profile </a>
		</p>
		<div class="projects-list">
			<ProjectShowcase
				title="Aegix Engine"
				description="C++ and Vulkan game engine featuring physically based rendering, GLTF model loading and more."
				link="https://github.com/chFleschutz/aegix-engine"
				image="/images/aegix.jpg"
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
		</div>
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

	.projects-list {
		display: flex;
		justify-content: space-between;
		gap: 2rem;
		margin: 2rem 0;
	}

	@media (max-width: 768px) {
		.projects {
			align-items: center;
			text-align: center;
		}

		.projects-list {
			flex-direction: column;
			align-items: center;
			gap: 2rem;
			padding: 2rem;
		}
	}
</style>
