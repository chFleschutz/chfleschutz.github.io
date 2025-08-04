<script lang="ts">
	interface Props {
		title?: string;
		link?: string;
		image?: string;
		imagePosition?: string;
	}

	let {
		title = 'Project Title',
		link = '/',
		image = '/textures/planet.png',
		imagePosition = 'center'
	}: Props = $props();
</script>

<a href={link} class="project-card">
	<img src={image} alt="{title} Image" style="object-position: {imagePosition};" />
	<h3>{title}</h3>
</a>

<style>
	.project-card {
		position: relative;
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
		z-index: 1;
		transition: 
			transform 0.3s ease,
			z-index 0.1s ease;
		will-change: transform, z-index;
		transform-origin: center 60%;
	}

	.project-card:hover {
		transform: scale(1.1);
		z-index: 10;
	}

	.project-card:hover img {
		box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
	}

	.project-card h3 {
		margin: 0.25rem 0;
	}

	img {
		width: 100%;
		height: 200px;
		object-fit: cover;
		object-position: center;
	}

	@media (max-width: 768px) {
		.project-card {
			width: 100%;
		}

		img {
			height: 300px;
		}
	}
</style>
