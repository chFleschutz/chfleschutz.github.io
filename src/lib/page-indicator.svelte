<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { writable } from 'svelte/store';

	const currentSection = writable(0);
	let sections: number = 0;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						currentSection.set(Number((entry.target as HTMLElement).dataset.section));
					}
				});
			},
			{ threshold: 0.5 }
		);

		const sectionElements = document.querySelectorAll('.section');
		sections = sectionElements.length;

		sectionElements.forEach((section, index) => {
			(section as HTMLElement).dataset.section = String(index);
			observer.observe(section);
		});

		return () => observer.disconnect();
	});

	const scrollToSection = (section: number) => {
		const sectionElement = document.querySelector(
			`.section[data-section="${section}"]`
		) as HTMLElement;
		if (!sectionElement) return;
		sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};
</script>

<div class="page-indicator">
	{#each Array.from({ length: sections }, (_, i) => i) as section}
		<div
			class="indicator"
			class:selected={$currentSection === section}
			role="button"
			tabindex="0"
			on:click={() => scrollToSection(section)}
			on:keydown={(e) => e.key === 'Enter' && scrollToSection(section)}
		>
			<div class="indicator-line" class:selected={$currentSection === section}></div>
		</div>
	{/each}
</div>

<style>
	.page-indicator {
		position: fixed;
		top: 50%;
		transform: translateY(-50%);
		z-index: 1000;
		width: 40px;
		height: 90px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 2.5rem;
	}

	.indicator {
		width: 70%;
		height: 100%;
		display: flex;
		align-items: center;
		cursor: pointer;
		transition: width 0.2s;
	}

	.indicator:hover {
		width: 85%;
	}

	.indicator.selected {
		width: 100%;
	}

	.indicator.indicator.selected:hover {
		width: 100%;
	}

	.indicator-line {
		width: 100%;
		height: 2px;
		background-color: var(--inactive-color);
		transition: background-color 0.2s;
	}

	.indicator-line.selected {
		background-color: var(--text-color);
	}
</style>
