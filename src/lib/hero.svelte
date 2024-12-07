<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { faItchIo } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="hero">
	<div class="hero-text">
		<h1>Hello, I'm <span class="accent">Chris</span></h1>
		<p>a dedicated computer science student specializing in game engineering and C++ development</p>

		<div class="icon-list">
			<a class="icon-button" href="https://github.com/chFleschutz" target="_blank">
				<FontAwesomeIcon icon={faGithub} />
			</a>
			<a class="icon-button" href="https://www.linkedin.com/in/christoph-fleschutz" target="_blank">
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
			<a class="icon-button" href="https://chfleschutz.itch.io" target="_blank">
				<FontAwesomeIcon icon={faItchIo} />
			</a>
		</div>
	</div>
	<div class="hero-image">
	</div>
</div>

<style>
	.hero {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: space-between;
	}

	.hero-text {
		flex: 1;
        padding-bottom: 1rem;
		text-align: left;
	}

	.hero-text h1 {
		font-size: 5rem;
		margin: 1rem 0;
	}

	.hero-text p {
		font-size: 1.5rem;
        line-height: 1.7;
        margin: 1rem 0;
	}

	.hero-image {
		flex: 1;
		text-align: center;
		padding: 1rem;
		max-width: 43%;
	}

	.icon-list {
		display: flex;
		gap: 1.5rem;
		font-size: 2.2rem;
		margin: 1rem 0;
        padding: 0.25rem;
	}
</style>
