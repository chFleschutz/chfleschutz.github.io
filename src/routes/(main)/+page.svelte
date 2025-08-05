<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

	import Hero from '$lib/sections/hero.svelte';
	import ProjectShowcase from '$lib/components/project-showcase.svelte';
	import Contact from '$lib/sections/contact.svelte';

	let projectSection = $state<HTMLElement | null>();
</script>

<section style="margin-top: -140px;">
	<Hero />
	<button
		class="chevron hover-effect"
		aria-label="Scroll to projects section"
		onclick={() => {
			projectSection?.scrollIntoView({ behavior: 'smooth' });
		}}
	>
		<FontAwesomeIcon icon={faChevronDown} size="2x" />
	</button>
</section>
<section bind:this={projectSection}>
	<div class="section-header">
		<h2 class="section-title text-gradient">Showcase</h2>
		<a href="/projects" class="section-button hover-effect">View All →</a>
	</div>
	<div class="project-list">
		<ProjectShowcase
			title="Aegix Engine"
			description="A modern C++20 Vulkan game engine with PBR, GLTF model loading, and a custom framegraph."
			link="/projects/aegix-engine"
			image="/images/aegix/aegix-helmets.webp"
		/>
		<ProjectShowcase
			title="Dustveil"
			description="A horde shooter built in Unreal Engine 5 with co-op multiplayer, developed as a student team project."
			link="/projects/dustveil"
			image="/images/dustveil/dustveil-horde.webp"
			reversed={true}
		/>
		<ProjectShowcase
			title="Medical Visualization"
			description="Visualizes CT scans using OpenGL volume rendering and slice viewing, built in C++20 with Qt."
			link="/projects/medical-visualization"
			image="/images/medical-vis/volume-render-phong.webp"
		/>
	</div>
</section>
<section>
	<Contact />
</section>

<style>
	.chevron {
		position: absolute;
		font-size: 0.75rem;
		bottom: 2rem;
		padding: 0.5rem;
		left: calc(50% - 1.25rem);
	}

	.section-header {
		display: grid;
		grid-template-columns: 1fr repeat(1, auto) 1fr;
		align-items: center;
		padding: 4rem;
		margin: 100px 0 0 0;
		max-width: var(--main-max-width);
		width: var(--main-width);
		margin: 0 auto;
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
