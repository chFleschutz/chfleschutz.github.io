<script>
	import Planet from '../planet.svelte';
	import SDF from '../components/sdf.svelte';
	import LinkIcons from '$lib/components/link-icons.svelte';
</script>

<div class="fullpage-container">
	<div class="hero">
		<div class="hero-text">
			<h2>Hello, I'm <span style="color: var(--color-accent)">Chris</span></h2>
			<p>
				a dedicated computer science student specializing in game engineering and C++ development
			</p>
			<LinkIcons />
		</div>
	</div>
	<div class="sdf">
		<SDF />
	</div>
</div>


<style>
	.sdf {
		position: absolute;
		width: 100%;
		height: 80vh;
		z-index: -1;
		filter: blur(5px);
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

	.hero-text h2 {
		font-size: 4rem;
	}

	.hero-text p {
		font-size: var(--font-size-medium);
	}

	@media (max-width: 768px) {
		.hero {
			flex-direction: column-reverse;
			gap: 0;
		}

		.hero-text {
			width: 100%;
		}
	}
</style>
