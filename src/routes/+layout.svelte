<script>
	import '../app.css';

	import Background from '$lib/background.svelte';
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
	<Background />

	<div class="layout">
		<slot></slot>

		<footer>
			<p>&copy; 2024 Created by Christoph Fleschutz</p>
		</footer>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		position: relative;
		min-height: 100vh;
		width: 100%;
		overflow-x: hidden;
		overflow-y: hidden;
	}

	.layout {
		max-width: var(--max-width);
		width: 100%;
		padding: 0 1rem;
	}

	footer {
		padding: 1rem;
	}
</style>
