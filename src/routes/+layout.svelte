<script>
	import '../app.css';
</script>

<svelte:head>
	<!-- Preconnect to Google Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />

	<!-- Load fonts -->
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main>
	<div class="content">
		<slot></slot>
	</div>
</main>

<footer>
	<p>&copy; 2024 Created by Christoph Fleschutz</p>
</footer>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.content {
		max-width: var(--max-width);
        width: 100%;
		text-align: center;
	}

	footer {
		text-align: center;
		padding: 1rem;
	}
</style>
