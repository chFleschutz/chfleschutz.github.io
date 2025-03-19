<script lang="ts">
	import { onMount } from 'svelte';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import emblaCarousel from 'embla-carousel';
	import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';

	const options: EmblaOptionsType = {
		loop: false,
		slidesToScroll: 'auto'
	};

	let viewport: HTMLDivElement;
	let nextButton: HTMLButtonElement;
	let prevButton: HTMLButtonElement;

	let embla: EmblaCarouselType;

	function onInit() {
		prevButton.removeAttribute('disabled');
		nextButton.removeAttribute('disabled');
	}

	function onSelect() {
		if (embla.canScrollPrev()) prevButton.removeAttribute('disabled');
		else prevButton.setAttribute('disabled', 'disabled');

		if (embla.canScrollNext()) nextButton.removeAttribute('disabled');
		else nextButton.setAttribute('disabled', 'disabled');
	}

	function onScrollPrev() {
		embla.scrollPrev();
	}

	function onScrollNext() {
		embla.scrollNext();
	}

	onMount(() => {
		embla = emblaCarousel(viewport, options);
		embla.on('init', onInit);
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
			<button class="embla-button" aria-label="Previous" bind:this={prevButton} onclick={onScrollPrev}>
				Previous
			</button>
			<button class="embla-button" aria-label="Next" bind:this={nextButton} onclick={onScrollNext}>
				Next
			</button>
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
		margin-top: 2rem;
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
</style>
