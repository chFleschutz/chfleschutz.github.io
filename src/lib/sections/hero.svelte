<script>
	import Planet from '../planet.svelte';
	import SDF from '../components/sdf.svelte';
	import LinkIcons from '$lib/components/link-icons.svelte';
</script>

<div class="fullpage-container">
	<!-- <div class="hero">
		<div class="hero-text">
			<h2 class="text-gradient">Hello, I'm Chris</h2>
			<p>
				a dedicated computer science student specializing in game engineering and C++ development
			</p>
			<LinkIcons />
		</div>
		<div class="hero-image">
			<Planet />
		</div>
	</div> -->
</div>
<div class="sdf">
	<SDF />
</div>


<style>
	.sdf {
		position: absolute;
		width: 80vw;
		height: 80vh;
		z-index: -1;
	}

	.hero {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3em;
	}

	.hero-text {
		max-width: 600px;
		width: 50%;
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
	}

	.hero-text p {
		font-size: var(--font-size-medium);
	}

	.hero-image {
		max-width: 500px;
		aspect-ratio: 1;
		width: 50%;
	}

	@media (max-width: 768px) {
		.hero {
			flex-direction: column-reverse;
			gap: 0;
		}

		.hero-text {
			width: 100%;
		}

		.hero-image {
			max-width: 300px;
			width: 100%;
		}
	}
</style>
