<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

	import Header from '$lib/header.svelte';
	import Hero from '$lib/hero.svelte';
</script>

<svelte:head>
	<title>Christoph Fleschutz</title>
</svelte:head>

<div class="section">Section 1</div>
<div class="section">Section 2</div>
<div class="section">Section 3</div>
<div class="section">Section 4</div>

<style>
	.section {
		height: 100%;
		width: 100%;
		scroll-snap-align: start; 
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
	}
</style>
