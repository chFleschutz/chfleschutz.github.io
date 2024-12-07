<header>
	<h1>Christoph Fleschutz</h1>
	<nav>
		<a href="/">about me</a>
		<a href="/">projects</a>
		<a href="/">contact</a>
	</nav>
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: var(--max-width);
		gap: 3rem;
        padding: 1rem 0;
	}

	header h1 {
		font-size: 20px;
		text-transform: uppercase;
	}

	nav {
		display: flex;
		white-space: nowrap;
		gap: 3rem;
	}

	nav a {
		text-decoration: none;
		transition: transform ease 0.2s;
	}

	nav a:hover {
		transform: translate(0, -3px);
	}
</style>
