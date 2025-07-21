<script lang="ts">
	import { page } from '$app/stores';

	$: currentPath = $page.url.pathname;
</script>

<header>
	<div class="header-container">
		<h1>Christoph<br />Fleschutz</h1>
		<nav>
			<a href="/" class="hover-effect" class:text-gradient={currentPath === '/'}> home </a>
			<a href="/projects" class="hover-effect" class:text-gradient={currentPath === '/projects'}>
				projects
			</a>
			<a href="/about" class="hover-effect" class:text-gradient={currentPath === '/about'}>
				about
			</a>
		</nav>
	</div>
</header>

<style>
	header {
		position: absolute;
		width: 100%;
		z-index: 1000;
	}

	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
		padding: 2.5rem;
	}

	nav {
		display: flex;
		white-space: nowrap;
		gap: 4rem;
	}

	a {
		text-decoration: none;
		font-weight: var(--font-weight-regular);
	}

	@media (max-width: 768px) {
		header {
			position: relative;
		}

		.header-container {
			align-items: flex-start;
			padding: 1.5rem;
		}

		nav {
			flex-direction: column;
			gap: 1rem;
			align-items: flex-end;
			position: absolute;
			top: 1.5rem;
			right: 1.5rem;
		}
	}
</style>
