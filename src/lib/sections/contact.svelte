<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faCopy } from '@fortawesome/free-solid-svg-icons';

	import LinkIcons from '$lib/components/link-icons.svelte';
	import Footer from '$lib/footer.svelte';

	const email = 'ch.fleschutz@gmail.com';
	let copied = false;
	const copyEmail = () => {
		navigator.clipboard.writeText(email);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	};
</script>

<div class="contact-container">
	<div class="contact">
		<h2 class="text-gradient">Let's Get In Touch</h2>
		<p>If you have any questions feel free to contact me</p>
		<div
			class="email-container hover-effect"
			on:click={copyEmail}
			on:keydown={(e) => e.key === 'Enter' && copyEmail()}
			aria-label="Copy email address"
			role="button"
			tabindex="0"
		>
			<p>{email}</p>
			<div>
				<FontAwesomeIcon icon={faCopy} />
			</div>
		</div>
		<LinkIcons />
	</div>
	<Footer />
</div>

<style>
	.contact-container {
		position: relative;
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-rows: 1fr auto;
		justify-items: center;
		align-items: center;
	}

	.contact {
		max-width: 70vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin-top: 3rem;
	}

	.email-container {
		display: flex;
		align-items: center;
		gap: 1rem;
		cursor: pointer;
		padding: 1rem;
		margin: 2rem 0;
		background-color: transparent;
		border: 1px solid var(--color-text);
		border-radius: 10px;
	}

	.email-container p {
		margin: 0;
	}
</style>
