<script lang="ts">
	import { onMount } from 'svelte';
	
	import { currentSection, isLastSection, sectionCount } from '$lib/section-store';
	
	import Hero from '$lib/sections/hero.svelte';
	import About from '$lib/sections/about.svelte';
	import Projects from '$lib/sections/projects.svelte';
	import Contact from '$lib/sections/contact.svelte';
	
	onMount(() => {
		// Query all sections
		const sectionElements = document.querySelectorAll('section');
		sectionCount.set(Number(sectionElements.length));

		// Create an observer to detect the current section
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const sectionNumber = Number((entry.target as HTMLElement).dataset.section);
						currentSection.set(sectionNumber);
						isLastSection.set(sectionNumber === sectionElements.length - 1);
					}
				});
			},
			{ threshold: 0.5 }
		);

		sectionElements.forEach((section, index) => {
			(section as HTMLElement).dataset.section = String(index);
			observer.observe(section);
		});

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>Christoph Fleschutz</title>
</svelte:head>

<section><Hero /></section>
<section><About /></section>
<section><Projects /></section>
<section><Contact /></section>

<style>
	section {
		height: 100%;
		width: 100%;
		scroll-snap-align: start;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 768px) {
		section {
			height: auto;
			scroll-snap-type: y mandatory;
			margin-bottom: 10rem;
		}

		section:last-child {
			margin-bottom: 0;
		}
	}
</style>
