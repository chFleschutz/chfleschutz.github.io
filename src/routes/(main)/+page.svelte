<script lang="ts">
	import Hero from '$lib/sections/hero.svelte';
	import ProjectShowcaseBig from '$lib/components/project-showcase-big.svelte';
	import Contact from '$lib/sections/contact.svelte';
</script>

<div style="margin-top: -140px;">
	<Hero />
</div>
<div class="section-header">
	<h2 class="section-title text-gradient">Selected Projects</h2>
	<a href="/projects" class="section-button hover-effect">View All →</a>
</div>
<div class="project-list">
	<ProjectShowcaseBig
		title="Aegix Engine"
		description="Vulkan Game Engine"
		link="/projects/aegix-engine"
		image="/images/aegix-engine.jpg"
	/>
	<ProjectShowcaseBig
		title="Dustveil"
		description="Coop Horde Shooter"
		link="/projects/dustveil"
		image="/textures/planet.png"
		reversed={true}
	/>
	<ProjectShowcaseBig
		title="Medical Visualization"
		description="Visualization of medical CT scans"
		link="/projects/medical-visualization"
		image="/images/volume-render.jpg"
	/>
</div>
<Contact />

<style>
	.section-header {
		display: grid;
		grid-template-columns: 1fr repeat(1, auto) 1fr;
		align-items: center;
		padding: 4rem;
		margin: 100px 0 0 0;
	}

	.section-title {
		grid-column-start: 2;
	}

	.section-button {
		margin-left: auto;
		padding: 0.5rem 1rem;
		font-weight: var(--font-weight-bold);
	}

	.project-list {
		display: flex;
		flex-direction: column;
		gap: 100px;
	}

</style>
