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
	<a href={link} class="hover-effect">View on Github</a>
</div>

<style>
	.project-showcase {
		width: 400px;
		display: flex;
		flex-direction: column;
	}

	.project-showcase p {
		margin-top: 0rem;
		margin-bottom: 1.5rem;
	}

	img {
		width: 100%;
		max-height: 200px;
		object-fit: cover;
		object-position: center;
	}
</style>
