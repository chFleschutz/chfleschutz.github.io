<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

	import Header from '$lib/header.svelte';
</script>

<svelte:head>
	<title>Christoph Fleschutz</title>
</svelte:head>

<div class="container">
	<Header />

	<div class="hero">
		<div class="hero-text">
			<h1>Hello, I'm <span class="accent">Chris</span></h1>
			<p>a dedicated computer science student specializing in game engineering and C++ development</p>
		</div>
		<div class="hero-image">
			<FontAwesomeIcon icon={faChevronDown} />
		</div>
	</div>

	<div class="arrow">
		<FontAwesomeIcon icon={faChevronDown} />
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.hero {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: space-between;
	}

	.hero-text {
		flex: 1;
		padding: 1rem;
		text-align: left;
	}

	.hero-text h1 {
		font-size: 5rem;
		margin: 1rem 0;
	}

	.hero-text p {
		font-size: 1.6rem;
	}

	.hero-image {
		flex: 1;
		text-align: center;
		padding: 1rem;
		max-width: 40%;
	}

	.arrow {
		font-size: 1rem;
		text-align: center;
		padding: 2rem 1rem 3rem 1rem;
	}
</style>
