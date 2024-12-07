<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

	import Header from '$lib/header.svelte';
	import Hero from '$lib/hero.svelte';
</script>

<svelte:head>
	<title>Christoph Fleschutz</title>
</svelte:head>

<section class="full-page">
	<Header />
	<Hero />
	<div class="arrow icon-button">
		<FontAwesomeIcon icon={faChevronDown} />
	</div>
</section>
<section>
	<h1>Projects</h1>
	<h1>Projects</h1>
	<h1>Projects</h1>
	<h1>Projects</h1>
	<h1>Projects</h1>
	<h1>Projects</h1>
	<h1>Projects</h1>
	<h1>Projects</h1>
	<h1>Projects</h1>
	<h1>Projects</h1>
	<h1>Projects</h1>
	<h1>Projects</h1>
	<h1>Projects</h1>
	<h1>Projects</h1>
	<h1>Projects</h1>
</section>

<style>
	.full-page {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.arrow {
		display: flex;
		justify-content: center;
		max-height: 1.25rem;
		padding: 3rem;
	}
</style>
