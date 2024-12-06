<script>
	export let title = 'Christoph Fleschutz';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="container">
	<header>
		<h1>Christoph Fleschutz</h1>
		<nav>
			<a href="/">about me</a>
			<a href="/">projects</a>
			<a href="/">contact</a>
		</nav>
	</header>

	<div class="hero">
		<h1>Welcome to My Portfolio!</h1>
		<p>This is the main page of my website.</p>
	</div>
</div>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: var(--max-width);
		padding: 1rem;
        gap: 3rem;
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

	.container {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

    .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>
