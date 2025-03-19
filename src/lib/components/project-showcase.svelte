<script lang="ts">
	export let title: string = 'Project Title';
	export let description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
	export let link: string = '/';
	export let image: string = '/textures/planet.png';
	export let imagePosition: string = 'center';
</script>

<div class="project-showcase">
	<img src={image} alt="" style="object-position: {imagePosition};" />
	<h3>{title}</h3>
	<p>{description}</p>
	<a class="hover-effect" href={link} target="_blank">View on Github</a>
</div>

<style>
	.project-showcase {
		width: 350px;
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
	}

	.project-showcase p {
		margin-top: 0rem;
		margin-bottom: 1rem;
	}

	img {
		width: 100%;
		height: 200px;
		object-fit: cover;
		object-position: center;
	}

	@media (max-width: 768px) {
		.project-showcase {
			width: 100%;
		}

		.project-showcase p {
			padding: 0 0.5rem;
		}

		img {
			height: 300px;
		}
	}
</style>
