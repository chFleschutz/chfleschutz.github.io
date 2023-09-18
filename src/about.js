import './styles.css'

import portrait from './assets/portrait.jpg';

export function setupAbout() {
    const about = document.createElement('section');
    about.id = 'about-me';
    about.style.marginTop = '50px';
    about.style.paddingTop = '20px';
    about.innerHTML = `
    <h2>About me</h2>
    <div class="section-card">
        <div class="card-image">
            <img src="${portrait}" alt="About Image">
        </div>
        <div class="card-text">
            <p>
            I'm Christoph Fleschutz, a dedicated computer science student with a burning passion for game engineering and all things tech. From a young 
            age, I was captivated by the endless possibilities of computers and the power of programming to bring ideas to life. I'm currently on an 
            exciting journey at the University of Applied Sciences Kempten, pursuing a Bachelor's degree in Computer Science with a specialization in 
            Game Engineering.<br><br>

            My focus in the tech realm lies in game engineering and C++ development. I thrive on the challenge of building immersive worlds from lines 
            of code, and my journey has led me to develop several projects, including games like "Abduction in Lab 42," a VR puzzle game.<br><br>

            I chose this path because I was fascinated by programming since I started learning it in school, and I'm driven by the belief that technology 
            can shape the future in incredible ways. I'm particularly passionate about creating performant games using C++, which I believe hold the key 
            to unlocking new possibilities in game development.<br><br>

            As I continue on this journey, my goal is to create immersive worlds with awesome gameplay features. I'm known for my ability to abstract 
            problems and find creative ways to solve them and am committed to pushing the boundaries of what's possible in this dynamic field.<br><br>

            Feel free to get in touch with me at <a href="mailto:ch.fleschutz@gmail.com">ch.fleschutz@gmail.com</a>. Additionally, you can explore more of my projects in the section below or on 
            my <a href="https://github.com/chFleschutz" target="_blank">GitHub</a> profile.<br><br>

            Thank you for stopping by, and I can't wait to see where this incredible world of technology takes us next!
            </p>
        </div>
    </div>
    `;
    return about;
}


