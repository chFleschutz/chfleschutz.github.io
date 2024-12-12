<script lang="ts">
	import { currentSection, sectionCount, scrollToSection } from './section-store';
</script>

<div class="page-indicator">
	{#each Array.from({ length: $sectionCount }, (_, i) => i) as section}
		<button
			class="indicator"
			class:selected={$currentSection === section}
			on:click={() => scrollToSection(section)}
			on:keydown={(e) => e.key === 'Enter' && scrollToSection(section)}
			aria-label="Go to section"
		>
			<div class="indicator-line" class:selected={$currentSection === section}></div>
		</button>
	{/each}
</div>

<style>
	.page-indicator {
		position: fixed;
		top: 50%;
		transform: translateY(-50%);
		z-index: 1000;
		width: 40px;
		height: 90px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 2.5rem;
	}

	.indicator {
		width: 70%;
		height: 100%;
		display: flex;
		align-items: center;
		cursor: pointer;
		transition: width 0.2s;
	}

	.indicator:hover {
		width: 85%;
	}

	.indicator.selected {
		width: 100%;
	}

	.indicator.indicator.selected:hover {
		width: 100%;
	}

	.indicator-line {
		width: 100%;
		height: 2px;
		background-color: var(--color-inactive);
		transition: background-color 0.2s;
	}

	.indicator-line.selected {
		background-color: var(--color-text);
	}
</style>
