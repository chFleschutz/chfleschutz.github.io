import './styles.css'

import painting from './assets/painting.png';

export function setupHero() {
    const hero = document.createElement('div');
    hero.className = 'hero-section';
    hero.innerHTML = `
        <div class="hero-text">
            <h1>Hello, I'm <span class="accent-color">Chris</span></h1>
            <p>a dedicated computer science student specializing in game engineering and C++ development</p>
        </div>
        <div class="hero-image">
            <img src="${painting}" alt="Hero Image">
            <div class="bg-line-stripe" style="translate: -130px -450px;">
                <div class="bg-line" style="width: 800px;"></div>
                <div class="bg-line" style="width: 800px;"></div>
                <div class="bg-line" style="width: 800px;"></div>
                <div class="bg-line" style="width: 800px;"></div>
            </div>
        </div>
    `;
    return hero;
}