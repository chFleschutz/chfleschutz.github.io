<script lang="ts">
	import { scrollToSection } from "./section-store";
</script>

<header>
	<div class="header-container">
		<h1>Christoph<br />Fleschutz</h1>
		<div class="section-list">
			<button on:click={() => scrollToSection(0)}>home</button>
			<button on:click={() => scrollToSection(1)}>about me</button>
			<button on:click={() => scrollToSection(2)}>projects</button>
			<button on:click={() => scrollToSection(3)}>contact</button>
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

	header h1 {
		font-size: 20px;
		text-transform: uppercase;
		margin: 0;
	}

	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2.5rem;
	}

	.section-list {
		display: flex;
		white-space: nowrap;
		gap: 3rem;
	}
</style>
