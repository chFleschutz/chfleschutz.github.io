<script>
	export let title = 'Christoph Fleschutz';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="container">
    <h1>Welcome to My Portfolio!</h1>
    <p>This is the main page of my website.</p>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
    }
</style>
