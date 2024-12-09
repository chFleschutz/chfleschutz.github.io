<script>
    import Planet from '../planet.svelte';
	import LinkIcons from '$lib/components/link-icons.svelte';
</script>

<div class="fullpage-container">
	<div class="hero">
		<div class="hero-text">
			<h1>Hello, I'm <span class="accent">Chris</span></h1>
			<p>a dedicated computer science student specializing in game engineering and C++ development</p>
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

	.hero-text h1 {
		font-size: 5rem;
		margin: 1rem 0;
	}

	.hero-text p {
		font-size: 1.5rem;
        line-height: 1.7;
        margin: 1rem 0;
	}

	.hero-image {
		flex: 1;
		max-width: 43%;
		aspect-ratio: 1;
	}
</style>
