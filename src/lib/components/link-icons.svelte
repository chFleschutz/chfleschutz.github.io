<script>
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { faItchIo } from '@fortawesome/free-brands-svg-icons';
</script>

<div class="icon-list">
	<a class="icon hover-effect" href="https://github.com/chFleschutz" target="_blank">
		<FontAwesomeIcon icon={faGithub} />
	</a>
	<a
		class="icon hover-effect"
		href="https://www.linkedin.com/in/christoph-fleschutz"
		target="_blank"
	>
		<FontAwesomeIcon icon={faLinkedin} />
	</a>
	<a class="icon hover-effect" href="https://chfleschutz.itch.io" target="_blank">
		<FontAwesomeIcon icon={faItchIo} />
	</a>
</div>

<style>
	.icon-list {
        width: fit-content;
		display: flex;
		gap: 1.5rem;
		font-size: 2.2rem;
		margin: 1rem 0;
		padding: 0.25rem;
	}

	.icon {
		background-color: transparent;
		border: none;
		cursor: pointer;
		display: inline-block;
		font-size: 2rem;
		text-decoration: none;
	}
</style>
