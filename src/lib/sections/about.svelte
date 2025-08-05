<div class="about">
	<div class="about-text">
		<h2 class="text-gradient">About me</h2>
		<p>
			I'm currently completing my Master's degree in <strong>Game Engineering and Visual Computing</strong> at the
			University of Applied Sciences Kempten.
		</p>
		<p>
			My areas of interest are C++, computer graphics and game development, with a particular focus
			on real-time rendering and engine programming. This has led me to develop my own Vulkan-based
			game engine and gain experience with Unreal Engine.
		</p>
		<p>
			My Master's thesis covers <strong>GPU-Driven Rendering with Mesh Shaders</strong> and is set to finish in early
			2026.
		</p>
	</div>
	<img class="about-image" src="/images/portrait.jpg" alt="" />
</div>

<style>
	.about {
		width: 70vw;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		gap: 5%;
		margin: 5rem auto;
	}

	.about-text {
		max-width: 500px;
		justify-self: right;
		text-align: left;
		padding-bottom: 1rem;
	}

	.about-text h2 {
		margin-bottom: 2rem;
	}

	.about-image {
		max-width: 500px;
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		object-position: top;
	}

	@media (max-width: 768px) {
		.about {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.about-text {
			justify-self: center;
		}

		.about-image {
			max-width: 200px;
			justify-self: center;
		}
	}
</style>
