import './styles.css'

import { setupProjectCard } from './project-card';

import painting from './assets/painting.png';

export function setupProjects() {
    const projectSection = document.createElement('section');
    projectSection.id = 'projects';
    projectSection.innerHTML = `
        <h2>Selected Projects</h2>
    `;

    const projectData = [
        {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ultricies nisl',
            imageSrc: painting,
            githubLink: '#',
            tags: ['C++', 'Vulkan', 'Unreal Engine'],
            imageLeftSide: true
        },
        {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ultricies nisl',
            imageSrc: painting,
            githubLink: '#',
            tags: ['C++', 'Vulkan', 'Unreal Engine'],
            imageLeftSide: false 
        },
        {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl vitae tincidunt ultricies, nunc nisl ultricies nunc, vitae ultricies nisl',
            imageSrc: painting,
            githubLink: '#',
            tags: ['C++', 'Vulkan', 'Unreal Engine'],
            imageLeftSide: true   
        }
    ]

    projectData.forEach(project => {
        projectSection.appendChild(setupProjectCard(project.title, project.description, project.imageSrc, project.githubLink, project.tags, project.imageLeftSide));
    });

    return projectSection;
}