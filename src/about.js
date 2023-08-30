import './styles.css'

export function setupAbout() {
    const about = document.createElement('section');
    about.innerHTML = `
    <section class="section" id="about-me" style="margin-top: 50px; padding-top: 20px;">
    <h2>About me</h2>
    <div class="section-card">
        <div class="card-image">
            <img src="images/painting.png" alt="About Image">
        </div>
        <div class="card-text">
            <h3>Get to Know Me</h3>
            <p>
                I'm Christoph Fleschutz, a dedicated computer science student with a burning passion for game
                engineering and all things tech. Currently, I'm embarking on a thrilling journey at the
                University of Applied Sciences Kempten, pursuing a Bachelor's degree in Computer Science with a
                specialization in Game Engineering. <br><br>
                My fascination with computers started at an early age and has only grown stronger. When I'm not
                crafting code, you'll find me immersed in video games or nurturing my collection of small bonsai
                trees. It's the blend of creativity and problem-solving that draws me to programming. <br><br>
                My focus in the tech realm lies in game engineering and C++ development. I thrive on the
                challenge of building immersive worlds from lines of code. Whether it's crafting intricate
                gameplay mechanics or delving into rendering techniques, I'm constantly driven to explore the
                limits of what's possible. <br><br>
                For me, learning is an infinite journey, and I'm on a relentless quest to enhance my skills and
                reach for perfection. From the very beginning, the world of programming captivated me, offering
                the ability to materialize ideas from imagination to reality. It's the joy of creating, shaping,
                and improving that keeps me motivated in this dynamic field. <br><br>
                Long before I understood the intricacies of programming, I was captivated by computers. The
                limitless potential for creation, guided solely by imagination, led me to pursue this path. As I
                delved into programming during my school days, the realization that I could bring my ideas to
                life with lines of code solidified my decision. <br><br>
                Have a project in mind or just want to chat about game engineering, programming, or even bonsai
                trees? Feel free to get in touch with me at ch.fleschutz@gmail.com. Additionally, you can
                explore more of my projects on my <a href="https://github.com/chFleschutz">GitHub</a> profile.
                <br><br>
                Thank you for stopping by, and I can't wait to see where this incredible world of technology
                takes us next!
            </p>
        </div>
    </div>
    </section>
    `;	
    return about;
}