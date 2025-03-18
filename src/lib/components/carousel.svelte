<script lang="ts">

</script>

<div class="carousel">
    <div class="carousel-container">
        <slot></slot>
    </div>
</div>

<style>
    .carousel {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    .carousel-container {
        display: flex;
        gap: 2rem;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
		scrollbar-width: none;
    }
</style>