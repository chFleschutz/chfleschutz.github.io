<script lang="ts">
	interface Props {
		title?: string;
		description?: string;
		link?: string;
		image?: string;
		reversed?: boolean;
	}

	let {
		title = 'Project Title',
		description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		link = '/',
		image = '/textures/planet.png',
		reversed = false
	}: Props = $props();
</script>

<a href={link} class="showcase" class:reversed aria-label="{title} Project Showcase">
	<div class="image-container">
		<img src={image} alt="{title} Image" />
	</div>
	<div class="details-container">
		<div class="details-inner">
			<h2>{title}</h2>
			<p class="details-text">{description}</p>
			<p class="details-button text-gradient">View Project →</p>
		</div>
	</div>
</a>

<style>
	.showcase {
		display: flex;
		max-width: var(--main-max-width);
		width: var(--main-width);
		margin: 0 auto;
	}

	.showcase:hover img {
		transform: scale(1.05);
	}

	.showcase.reversed {
		flex-direction: row-reverse;
	}

	.showcase.reversed .details-inner {
		padding: 6% 2% 6% 16%;
	}

	.image-container {
		width: 60%;
		height: 400px;
		margin: 2rem;
		overflow: hidden;
		border-radius: 10px;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.details-container {
		width: 40%;
		display: flex;
		align-items: center;
	}

	.details-inner {
		display: flex;
		flex-direction: column;
		text-align: left;
		text-transform: none;
		padding: 6% 16% 6% 2%;
	}

	.details-inner h2 {
		margin-bottom: 1rem;
	}

	.details-text {
		margin: 1rem 0;
		font-size: var(--font-size-medium);
		font-weight: var(--font-weight-light);
	}

	.details-button {
		text-decoration: none;
		text-transform: uppercase;
		font-weight: var(--font-weight-bold);
		font-size: var(--font-size-medium);
		transition: color 0.3s ease;
	}

	@media (max-width: 768px) {
		.showcase {
			flex-direction: column;
			align-items: center;
		}

		.showcase.reversed {
			flex-direction: column;
		}

		.showcase.reversed .details-inner {
			padding: 0;
		}

		.image-container {
			width: 100%;
			height: 300px;
			margin: 1rem 0;
		}

		.details-container {
			width: 100%;
			padding: 0 2rem;
			text-align: center;
		}

		.details-inner {
			padding: 0;
		}

	}
</style>
