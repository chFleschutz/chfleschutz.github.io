import './styles.css'

import { setupHeader } from './header.js'
import './three.js'

export function setupHero() {
    const heroContent = document.createElement('div');
    heroContent.className = 'hero-section';
    heroContent.innerHTML = `
        <div class="hero-text">
            <h1>Hello, I'm <span class="accent-color">Chris</span></h1>
            <p>a dedicated computer science student specializing in game engineering and C++ development</p>
        </div>
        <div class="hero-image">
            <canvas id="canvas"></canvas>
            <div class="bg-line-stripe" style="transform: translate(0px, 30vh);">
                <div class="bg-line" style="width: 800px;"></div>
                <div class="bg-line" style="width: 800px;"></div>
                <div class="bg-line" style="width: 800px;"></div>
                <div class="bg-line" style="width: 800px;"></div>
            </div>
        </div>
    `;
        
    const expandArrow = document.createElement('a');
    expandArrow.className = 'expand-arrow';
    expandArrow.href = '#about-me';
    expandArrow.innerHTML = `
        <span class="material-symbols-rounded">expand_more</span>
    `;
    
    const heroSection = document.createElement('section');
    heroSection.className = 'fill-screen';
    heroSection.appendChild(setupHeader());
    heroSection.appendChild(heroContent);
    heroSection.appendChild(expandArrow);
    return heroSection;
}