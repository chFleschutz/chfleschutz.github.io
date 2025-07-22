<script>
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import Header from '$lib/layout/header.svelte';

	const quote = ['Ups!', 'Tja!', 'Hoppla!', '(╯°□°)╯︵ ┻━┻', '¯\\_(ツ)_/¯'];

	let randomQuote = '...';
	onMount(() => {
		randomQuote = quote[Math.floor(Math.random() * quote.length)];
		console.log(`Error page loaded: ${randomQuote}`);
	});
</script>

<div class="error-page">
	<Header />
	<div class="error-content">
		<h1 class="text-gradient">{randomQuote}</h1>
		<p>Error {page.status}</p>
		<p>{page.error?.message || 'An unexpected error occurred.'}</p>
		<a href="/" class="hover-effect">Take me somewhere safe</a>
	</div>
</div>

<style>
	.error-page {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.error-content {
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.error-content h1 {
		font-size: 6rem;
        margin: 1.5rem 0;
	}

	.error-content p {
		font-size: 1.75rem;
        margin: 0.25rem 0;
	}

	.error-content a {
		font-size: 1.5rem;
        text-transform: none;
		border: 1px solid var(--color-primary);
		border-radius: 10px;
		padding: 1rem 2rem;
		margin: 5rem;
	}
</style>
