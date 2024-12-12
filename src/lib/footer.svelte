<script lang="ts">
    import { isLastSection } from './section-store';
</script>

<div class="footer" class:visible={$isLastSection}>
	<p>Created by me &copy 2024</p>
    <div class="gradient"></div>
</div>

<style>
	.footer {
        position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: translateY(200%);
        transition: transform 0.3s ease-out;
	}

    .footer p {
        color: var(--color-inactive);
    }

    .footer.visible {
        transform: translateY(0);
    }

    .gradient {
        width: 100%;
        height: 0.7rem;
        z-index: -1;
        background: linear-gradient(90deg, var(--color-primary) 5%, var(--color-accent) 95%);
    }
</style>
