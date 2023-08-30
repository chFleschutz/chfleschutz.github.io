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

heroSection.appendChild(setupHeader());
heroSection.appendChild(setupHero());

const expandArrow = document.createElement('a');
expandArrow.className = 'expand-arrow';
expandArrow.href = '#about-me';
expandArrow.innerHTML = `
    <span class="material-symbols-rounded">expand_more</span>
`;
heroSection.appendChild(expandArrow);

appContainer.appendChild(heroSection);
appContainer.appendChild(setupAbout());
appContainer.appendChild(setupProjects());
appContainer.appendChild(setupContact());
appContainer.appendChild(setupFooter());
appContainer.appendChild(setupBackground());
