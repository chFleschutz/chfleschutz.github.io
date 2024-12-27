<script>
	import Planet from '../planet.svelte';
	import SDF from '../components/sdf.svelte';
	import LinkIcons from '$lib/components/link-icons.svelte';
</script>

<div class="hero">
	<div class="hero-text">
		<h2 class="text-gradient">Hi, I'm Chris</h2>

		<p>A master's student specializing in game engineering, C++ and real-time graphics</p>
		<LinkIcons />
	</div>

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
		max-width: 550px;
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
