<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { EmblaOptionsType, EmblaPluginType, EmblaCarouselType } from 'embla-carousel';

	export let images: string[] = [];
	export let options: EmblaOptionsType = { loop: false };
	export let optionsThumbs: EmblaOptionsType = {
		loop: false,
		dragFree: true,
		containScroll: 'keepSnaps'
	};
	export let plugins: EmblaPluginType[] = [];

	let emblaMain: EmblaCarouselType;
	let emblaThumbs: EmblaCarouselType;
	let selectedIndex = 0;

	function onInitMain(event: CustomEvent<EmblaCarouselType>) {
		emblaMain = event.detail;
		emblaMain.on('select', syncThumbs);
		syncThumbs();
	}

	function onInitThumbs(event: CustomEvent<EmblaCarouselType>) {
		emblaThumbs = event.detail;
	}

	function syncThumbs() {
		if (!emblaMain || !emblaThumbs) return;

		selectedIndex = emblaMain.selectedScrollSnap();
		emblaThumbs.scrollTo(selectedIndex);
	}

	function onThumbClick(index: number) {
		if (!emblaMain) return;
		emblaMain.scrollTo(index);
	}
</script>

<div class="carousel">
	<div class="embla" use:emblaCarouselSvelte={{ options, plugins }} onemblaInit={onInitMain}>
		<div class="embla-container">
			{#each images as image, i}
				<div class="embla-slide">
					<img src={image} alt="Image {i + 1}" />
				</div>
			{/each}
		</div>
	</div>
	{#if images.length > 1}
		<div
			class="embla thumbs"
			use:emblaCarouselSvelte={{ options: optionsThumbs, plugins }}
			onemblaInit={onInitThumbs}
		>
			<div class="embla-container thumbs-container">
				{#each images as image, i}
					<button
						class="embla-slide thumb-slide"
						class:is-selected={i === selectedIndex}
						onclick={() => onThumbClick(i)}
					>
						<img src={image} alt="Thumbnail {i + 1}" />
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.carousel {
		display: flex;
		flex-direction: column;
        margin: 2rem 0;
	}

	.embla {
		overflow: hidden;
	}

	.embla-container {
		display: flex;
		gap: 1rem;
	}

	.embla-slide {
		flex: 0 0 100%;
		min-width: 0;
        max-height: 550px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.embla-slide img {
		max-width: 100%;
		max-height: 100%;
		object-fit: cover;
		border-radius: 10px;
		margin: 0;
	}

	.thumbs {
		--thumbs-slide-height: 6rem;
		--thumbs-slide-spacing: 0.8rem;
	}

	.thumbs-container {
		margin: var(--thumbs-slide-spacing) 0.4rem;
		gap: var(--thumbs-slide-spacing);
	}

	.thumb-slide {
		flex: 0 0 auto;
		width: calc(var(--thumbs-slide-height) * 1.77);
		height: var(--thumbs-slide-height);
		opacity: 0.9;
	}

	.thumb-slide img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 10px;
	}

	.thumb-slide.is-selected {
		border: 2px solid var(--color-primary);
		border-radius: 12px;
		box-shadow: 0 0px 10px var(--color-primary);
	}
</style>
