import './styles.css'

import { setupHero } from './hero'
import { setupAbout } from './about';
import { setupProjects } from './projects';
import { setupContact } from './contact';
import { setupFooter } from './footer';
import { setupBackground } from './background';

const appContainer = document.querySelector('#app');
appContainer.appendChild(setupHero());
appContainer.appendChild(setupAbout());
appContainer.appendChild(setupProjects());
appContainer.appendChild(setupContact());
appContainer.appendChild(setupFooter());
appContainer.appendChild(setupBackground());
