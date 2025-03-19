<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';

	const options: EmblaOptionsType = {
		loop: false,
		slidesToScroll: 'auto'
	};
</script>

<div class="embla">
	<div class="embla-viewport" use:emblaCarouselSvelte={{ options, plugins: [] }}>
		<div class="embla-container">
			<slot></slot>
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
</style>
