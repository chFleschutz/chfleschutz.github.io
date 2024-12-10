<div class="fullpage-container">
	<div class="about">
		<div class="about-text">
			<h2 class="text-gradient">About me</h2>
			<p>
				I'm currently completing my Master's degree at the University of Applied Sciences Kempten.
			</p>
			<p>
				My areas of interests are efficient C++ development, graphics programming using Vulkan and
				general game development.
			</p>
			<p>
				With attention to detail, I enjoy creating simple but elegant solutions to improve
				performance and user experience
			</p>
		</div>
			<img class="about-image" src="/images/portrait.jpg" alt="" />
	</div>
</div>

<style>
	.about {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		gap: 5%;
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
</style>
