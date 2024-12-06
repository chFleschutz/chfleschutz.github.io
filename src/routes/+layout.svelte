<script>
	import '../app.css';
</script>

<header>
	<h1>Christoph Fleschutz</h1>
	<nav>
		<a href="/">about</a>
		<a href="/">projects</a>
		<a href="/">contact</a>
	</nav>
</header>

<main>
	<div class="content">
        <slot></slot>
    </div> 
</main>

<footer>
	<p>&copy; 2024 Created by Christoph Fleschutz</p>
</footer>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: var(--max-width);
		padding: 1rem;
		margin: 0 auto;
        font-size: 20px;
	}

	header h1 {
		font-size: 20px;
		text-transform: uppercase;
	}

	nav a {
		text-decoration: none;
		transition: transform ease 0.2s;
		margin: 0 1rem;
	}

	nav a:hover {
		transform: translate(0, -3px);
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

    .content {
        width: var(--max-width);
        text-align: center;
    }

	footer {
		text-align: center;
		padding: 1rem;
	}
</style>
