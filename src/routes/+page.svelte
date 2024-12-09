<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

	import Hero from '$lib/sections/hero.svelte';
	import About from '$lib/sections/about.svelte';
	import Projects from '$lib/sections/projects.svelte';
</script>

<svelte:head>
	<title>Christoph Fleschutz</title>
</svelte:head>

<div class="section"><Hero /></div>
<div class="section"><About/></div>
<div class="section"><Projects/></div>
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
