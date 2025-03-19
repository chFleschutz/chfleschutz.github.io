<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import emblaCarousel from 'embla-carousel';
	import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';

	const options: EmblaOptionsType = {
		loop: false,
		slidesToScroll: 'auto'
	};

	let viewport: HTMLDivElement;
	let nextButton: HTMLButtonElement;
	let prevButton: HTMLButtonElement;
	let dots: HTMLDivElement;

	let snapCount = 0;
	const selectedDot = writable(0);

	let embla: EmblaCarouselType;

	function onInit() {
		snapCount = embla.scrollSnapList().length;

		prevButton?.removeAttribute('disabled');
		nextButton?.removeAttribute('disabled');
		
		onSelect();
	}

	function onSelect() {
		if (embla.canScrollPrev()) prevButton?.removeAttribute('disabled');
		else prevButton?.setAttribute('disabled', 'disabled');

		if (embla.canScrollNext()) nextButton?.removeAttribute('disabled');
		else nextButton?.setAttribute('disabled', 'disabled');

		selectedDot.set(embla.selectedScrollSnap());
	}

	onMount(() => {
		embla = emblaCarousel(viewport, options);
		embla.on('init', onInit);
		embla.on('reInit', onInit);
		embla.on('select', onSelect);
	});
</script>

<div class="embla">
	<div class="embla-viewport" bind:this={viewport}>
		<div class="embla-container">
			<slot></slot>
		</div>
	</div>

	<div class="embla-controls">
		<div class="embla-buttons">
			<button
				class="embla-button"
				aria-label="Previous"
				bind:this={prevButton}
				onclick={() => embla.scrollPrev()}
			>
				Previous
			</button>
			<button
				class="embla-button"
				aria-label="Next"
				bind:this={nextButton}
				onclick={() => embla.scrollNext()}
			>
				Next
			</button>
		</div>

		<div class="embla-dots" bind:this={dots}>
			{#each Array(snapCount) as _, i}
				{#if $selectedDot === i}
					<button
						class="embla-dot embla-dot-selected"
						aria-label="Go to slide {i + 1}"
						onclick={() => embla.scrollTo(i)}
					></button>
				{:else}
					<button
						class="embla-dot"
						aria-label="Go to slide {i + 1}"
						onclick={() => embla.scrollTo(i)}
					></button>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	.embla {
		margin: auto;
	}

	.embla-viewport {
		overflow: hidden;
	}

	.embla-container {
		display: flex;
		gap: 2rem;
	}

	.embla-controls {
		display: grid;
		grid-template-columns: auto 1fr;
		justify-content: space-between;
		gap: 1rem;
		margin-top: 2.5rem;
	}

	.embla-buttons {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		align-items: center;
	}

	.embla-button {
		cursor: pointer;
	}

	.embla-button:disabled {
		opacity: 0.5;
	}

	.embla-dots {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		align-items: center;
		gap: 0.5rem;
	}

	.embla-dot {
		width: 1rem;
		height: 1rem;
		border: solid 1px var(--color-inactive);
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.embla-dot-selected {
		border: solid 2px var(--color-text);
	}
</style>
