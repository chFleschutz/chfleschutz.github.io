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
		<a href="/projects" class="section-button hover-effect">View More →</a>
	</div>
	<div class="project-list">
		<ProjectShowcase
			title="Aegix Engine"
			description="A Vulkan game engine written in C++ with PBR, a framegraph for multipass rendering and ECS scene management."
			link="/projects/aegix-engine"
			image="/images/aegix/aegix-helmets.webp"
		/>
		<ProjectShowcase
			title="Dustveil"
			description="A Horde shooter with co-op multiplayer, built in Unreal Engine 5 as a student team project."
			link="/projects/dustveil"
			image="/images/dustveil/dustveil-horde.webp"
			reversed={true}
		/>
		<ProjectShowcase
			title="Medical Visualization"
			description="Visualizes CT scans with direct volume rendering and slice viewing using Qt and OpenGL."
			link="/projects/medical-visualization"
			image="/images/medical-vis/volume-render-phong.webp"
		/>
	</div>
</section>
<section style="margin-top: 15rem;">
	<Contact />
</section>

<style>
	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(10px);
		}
	}

	.chevron {
		position: absolute;
		font-size: 1rem;
		bottom: 0.5rem;
		padding: 2rem;
		left: calc(50% - 3rem);
		animation: bounce 2s infinite;
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

	@media (max-width: 768px) {
		.section-header {
			display: flex;
			flex-direction: column;
			width: 100%;
			padding: 4rem 0;
		}

		.section-button {
			margin-left: 0;
		}
	}
</style>
