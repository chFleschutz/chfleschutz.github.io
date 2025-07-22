<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
</script>

<header>
	<a href="/">
		<h1>Christoph<br />Fleschutz</h1>
	</a>
	<a href="/projects" class="back-link hover-effect">
		<FontAwesomeIcon icon={faAngleLeft} />
		<span>back</span>
	</a>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
		padding: 2.5rem;
	}

	.back-link {
		display: flex;
		align-items: center;
		font-weight: var(--font-weight-bold);
		gap: 0.5rem;
		margin-right: 15%;
		padding: 0.5rem;
	}

	@media (max-width: 768px) {
		header {
			align-items: flex-start;
			padding: 1.5rem;
		}
	}
</style>
