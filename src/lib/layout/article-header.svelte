<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

	function goBack() {
		if (window.history.length > 2) {
			window.history.back();
		} else {
			window.location.href = '/';
		}
	}
</script>

<header>
	<a href="/">
		<h1>Christoph<br />Fleschutz</h1>
	</a>
	<button onclick={goBack} class="back-link hover-effect">
		<FontAwesomeIcon icon={faAngleLeft} />
		<span>back</span>
	</button>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
		padding: 2.5rem;
		max-width: var(--article-max-width);
		width: var(--article-width);
		margin: 0 auto;
	}

	.back-link {
		display: flex;
		align-items: center;
		font-weight: var(--font-weight-bold);
		gap: 0.5rem;
		padding: 0.5rem;
	}

	@media (max-width: 768px) {
		header {
			width: 90vw;
			align-items: flex-start;
			padding: 1.5rem;
		}
	}
</style>
