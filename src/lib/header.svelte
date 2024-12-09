<header>
	<div class="header-container">
		<h1>Christoph<br>Fleschutz</h1>
		<nav>
			<a href="/">home</a>
			<a href="/">about me</a>
			<a href="/">projects</a>
			<a href="/">contact</a>
		</nav>
	</div>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
	}

	header h1 {
		font-size: 20px;
		text-transform: uppercase;
		margin: 0;
	}

	.header-container{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2.5rem;
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
