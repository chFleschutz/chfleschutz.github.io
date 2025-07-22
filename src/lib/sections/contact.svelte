<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faCopy } from '@fortawesome/free-solid-svg-icons';

	import LinkIcons from '$lib/components/link-icons.svelte';

	const email = 'ch.fleschutz@gmail.com';
	let copied = false;

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(email);
			copied = true;
			setTimeout(() => (copied = false), 2000); // Reset after 2 seconds
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	}
</script>

<div class="contact">
	<h2 class="text-gradient">Let's Get In Touch</h2>
	<p>If you have any questions feel free to contact me</p>
	<span class="copied-message" class:visible={copied}>Copied</span>
	<button class="email-container hover-effect" on:click={copyEmail} aria-label="Copy email">
		<p>{email}</p>
		<FontAwesomeIcon icon={faCopy} />
	</button>
	<LinkIcons />
</div>

<style>
	.contact {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin: 15rem 0;
	}

	.email-container {
		display: flex;
		align-items: center;
		gap: 1rem;
		cursor: pointer;
		padding: 0.75rem 2rem;
		margin: 0.5rem 0 2rem 0;
		background-color: transparent;
		border: 1px solid var(--color-text);
		border-radius: 10px;
	}

	.email-container p {
		margin: 0;
	}

	.copied-message {
		font-weight: var(--font-weight-bold);
		background-color: var(--color-accent);
		border-radius: 10px;
		padding: 0.25rem 1rem;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.copied-message.visible {
		opacity: 1;
	}
</style>
