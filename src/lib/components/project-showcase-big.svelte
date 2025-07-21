<script lang="ts">
	export let title: string = 'Project Title';
	export let description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
	export let link: string = '/';
	export let image: string = '/textures/planet.png';
	export let reversed: boolean = false;
</script>

<a href={link} class="big-showcase" class:reversed aria-label="{title} Project Showcase">
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
	@property --gradientColor1 {
		syntax: '<color>';
		initial-value: transparent;
		inherits: false;
	}

	@property --gradientColor2 {
		syntax: '<color>';
		initial-value: transparent;
		inherits: false;
	}

	.big-showcase {
		display: flex;
		background: linear-gradient(120deg, var(--gradientColor1) 10%, var(--gradientColor2) 90%);
		transition:
			--gradientColor1 0.3s ease 0s,
			--gradientColor2 0.3s ease 0.1s;
	}

	.big-showcase:hover {
		--gradientColor1: var(--color-accent);
		--gradientColor2: var(--color-primary);
	}

	.big-showcase:hover .details-button {
		color: var(--color-text);
	}

	.big-showcase.reversed {
		flex-direction: row-reverse;
	}

	.big-showcase.reversed .details-inner {
		padding: 6% 2% 6% 16%;
	}

	.image-container {
		width: 60%;
		height: 600px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
		width: 90%;
		height: 90%;
		object-fit: cover;
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
		font-weight: var(--font-weight-normal);
	}

	.details-button {
		text-decoration: none;
		text-transform: uppercase;
		font-weight: var(--font-weight-bold);
		font-size: 1.1rem;
		transition: color 0.3s ease;
	}
</style>
