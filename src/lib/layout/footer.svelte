<script lang="ts">
    const currentYear = new Date().getFullYear();
</script>

<div class="footer">
	<p>Created by me &copy {currentYear}</p>
    <div class="gradient"></div>
</div>

<style>
	.footer {
		width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20rem;
	}

    .footer p {
        color: var(--color-inactive);
    }

    .gradient {
        width: 100%;
        height: 0.7rem;
        z-index: -1;
        background: linear-gradient(90deg, var(--color-primary) 5%, var(--color-accent) 95%);
    }
</style>
