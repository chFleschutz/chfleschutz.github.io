<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

	import Header from '$lib/header.svelte';
	import Hero from '$lib/hero.svelte';
</script>

<svelte:head>
	<title>Christoph Fleschutz</title>
</svelte:head>

<div class="container">
	<Header />
	<Hero />
	<div class="arrow icon-button">
		<FontAwesomeIcon icon={faChevronDown} />
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.arrow {
		display: flex;
		justify-content: center;
		max-height: 1rem;
		padding: 2rem 1rem 3rem 1rem;
	}
</style>
