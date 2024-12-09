<script>
    import Planet from '../planet.svelte';
	import LinkIcons from '$lib/components/link-icons.svelte';
</script>

<div class="fullpage-container">
	<div class="hero">
		<div class="hero-text">
			<h2>Hello, I'm <span class="accent">Chris</span></h2>
			<h3>a dedicated computer science student specializing in game engineering and C++ development</h3>
			<LinkIcons />
		</div>
		<div class="hero-image">
			<Planet />
		</div>
	</div>
</div>

<style>
	.hero {
		display: flex;
		align-items: center;
	}

	.hero-text {
		flex: 1;
        padding-bottom: 1rem;
		text-align: left;
	}

	.hero-image {
		flex: 1;
		max-width: 43%;
		aspect-ratio: 1;
	}
</style>
