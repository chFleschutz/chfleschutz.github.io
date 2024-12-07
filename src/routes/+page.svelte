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
		<h1>Welcome to My Portfolio!</h1>
		<p>This is the main page of my website.</p>
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
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.arrow {
		font-size: 1rem;
		text-align: center;
		padding: 2rem 1rem 3rem 1rem;
	}
</style>
