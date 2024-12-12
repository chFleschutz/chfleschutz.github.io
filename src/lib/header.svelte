<script lang="ts">
	import { scrollToSection, currentSection } from './section-store';
</script>

<header>
	<div class="header-container">
		<h1>Christoph<br />Fleschutz</h1>
		<div class="section-list">
			<button
				class="hover-effect"
				class:text-gradient={$currentSection === 0}
				on:click={() => scrollToSection(0)}>home</button
			>
			<button
				class="hover-effect"
				class:text-gradient={$currentSection === 1}
				on:click={() => scrollToSection(1)}>about me</button
			>
			<button
				class="hover-effect"
				class:text-gradient={$currentSection === 2}
				on:click={() => scrollToSection(2)}>projects</button
			>
			<button
				class="hover-effect"
				class:text-gradient={$currentSection === 3}
				on:click={() => scrollToSection(3)}>contact</button
			>
		</div>
	</div>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1000;
	}

	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
		padding: 2.5rem;
	}

	.section-list {
		display: flex;
		white-space: nowrap;
		gap: 4rem;
	}

	@media (max-width: 768px) {
		header {
			position: relative;
		}

		.header-container {
			align-items: flex-start;
			padding: 1.5rem;
		}

		.section-list {
			flex-direction: column;
			gap: 1rem;
			align-items: flex-end;
			position: absolute;
			top: 1.5rem;
			right: 1.5rem;
		}

		.section-list button:first-child {
			display: none;
		}
	}
</style>
