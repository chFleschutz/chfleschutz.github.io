<script lang="ts">
	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faCopy } from '@fortawesome/free-solid-svg-icons';

	import LinkIcons from '$lib/components/link-icons.svelte';

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

<div class="fullpage-container">
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
</div>

<style>
	.contact {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
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
