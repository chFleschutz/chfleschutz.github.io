<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
	
	import LinkIcons from '$lib/components/link-icons.svelte';
	import SDF from '$lib/components/sdf.svelte';

	import { scrollToSection } from '$lib/section-store';
</script>

<div class="hero">
	<div class="hero-text">
		<h2 class="text-gradient">Hi, I'm Chris</h2>

		<p>I'm a master's student specializing in game engineering, C++ and real-time graphics</p>
		<LinkIcons />
	</div>

	<button class="chevron hover-effect" on:click={() => scrollToSection(1)}>
		<FontAwesomeIcon icon={faChevronDown} size="2x" />
	</button>


	<div class="sdf">
		<SDF />
	</div>
</div>

<style>
	.hero {
		position: relative;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hero-text {
		max-width: 570px;
		width: 50%;
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
	}

	.hero-text h2 {
		font-size: 4rem;
	}

	.hero-text p {
		font-size: var(--font-size-medium);
	}

	.chevron {
		position: absolute;
		bottom: 2rem;
		font-size: 0.75rem;
		padding: 0.5rem;
	}

	.sdf {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	@media (max-width: 768px) {
		.hero {
			height: 90vh;
		}

		.hero-text {
			width: 80%;
		}

		.sdf {
			display: none;
		}
	}
</style>
