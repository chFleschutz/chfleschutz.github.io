import './styles.css'

import { setupHeader } from './header.js'
import { setupHero } from './hero'
import { setupAbout } from './about';
import { setupProjects } from './projects';
import { setupContact } from './contact';
import { setupFooter } from './footer';
import { setupBackground } from './background';

const appContainer = document.querySelector('#app');

const heroSection = document.createElement('section');
heroSection.className = 'fill-screen';
heroSection.innerHTML = `
        ${setupHeader().innerHTML}
        ${setupHero().innerHTML}
        <a class="expand-arrow" href="#about-me">
            <span class="material-symbols-rounded">expand_more</span>
        </a>
`;

appContainer.appendChild(heroSection);
appContainer.appendChild(setupAbout());
appContainer.appendChild(setupProjects());
appContainer.appendChild(setupContact());
appContainer.appendChild(setupFooter());
appContainer.appendChild(setupBackground());
