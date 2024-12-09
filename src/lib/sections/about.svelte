<div class="fullpage-container">
	<div class="about">
		<div class="about-text">
			<h2>About me</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mauris dolor, maximus at
				est vitae, lobortis rhoncus ligula.
            </p>
            <p>
				Vestibulum dolor est, ornare a nisl sit amet, placerat tempus enim. Sed eget nunc non ligula
				eleifend maximus. Vestibulum vitae justo ultrices, facilisis sem sed, fermentum dui.
			</p>
			<a href="/">Get my resume</a>
		</div>
		<div class="about-image">
			<img src="/textures/planet.png" alt="" />
		</div>
	</div>
</div>

<style>
	.about {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 3em;
		align-items: center;
	}

	.about-text {
		justify-self: right;
		padding-bottom: 1rem;
		text-align: left;
		max-width: 500px;
	}

	.about-text h2 {
		font-size: 3rem;
		margin: 1rem 0;
	}

	.about-text p {
		font-size: 1.5rem;
		line-height: 1.7;
		margin: 1rem 0;
	}

	.about-image {
		max-width: 500px;
		width: 100%;
		aspect-ratio: 1;
	}

	.about-image img {
		width: 100%;
		height: auto;
	}
</style>
