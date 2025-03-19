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
		<button
			class="embla-button"
			aria-label="Previous"
			bind:this={prevButton}
			onclick={() => embla.scrollPrev()}
		>
			<svg class="embla-button-svg" viewBox="0 0 532 532">
				<path
					fill="currentColor"
					d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
				></path>
			</svg>
		</button>

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

		<button
			class="embla-button"
			aria-label="Next"
			bind:this={nextButton}
			onclick={() => embla.scrollNext()}
		>
			<svg class="embla-button-svg" viewBox="0 0 532 532">
				<path
					fill="currentColor"
					d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
				></path>
			</svg>
		</button>
	</div>
</div>

<style>
	.embla {
		display: flex;
		flex-direction: column;
		margin: 2rem 0;
	}

	.embla-viewport {
		overflow: hidden;
	}

	.embla-container {
		display: flex;
		gap: 2rem;
	}

	.embla-controls {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 3rem;
		margin-top: 2.5rem;
	}

	.embla-button {
		width: 2.5rem;
		height: 2.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		cursor: pointer;
	}

	.embla-button:disabled {
		opacity: 0.4;
	}

	.embla-button-svg {
		width: 0.8rem;
		height: 0.8rem;
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
