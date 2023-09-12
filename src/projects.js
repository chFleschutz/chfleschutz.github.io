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
            title: 'Vulkanite Render Engine (WIP)',
            description: `Vulkanite Render Engine stands as an intriguing work-in-progress project, originating from an exercise for my Bachelor's thesis. Developed in alongside with the thesis, its primary goal is to explore the boundaries of real-time 3D graphics rendering, offering a valuable platform for learning and experimentation. <br> <br>
                Key features include harnessing the capabilities of the Vulkan API for in-depth exploration of modern graphics programming, efficient 3D model handling for hands-on 3-dimensional transformations and representation studies, and the integration of a Blinn-Phong shader to dive deep into per-fragment lighting. The engine's versatility extends to supporting various lighting scenarios, encompassing directional lights and a limited number of point lights for a comprehensive understanding of lighting in rendering. <br> <br>
                Technologies such as GLFW for window management, GLM for mathematical operations, and tiny object loader for seamless model integration provide the necessary tools for exploration. <br> <br>
                Together, these components create a dynamic learning experience in the realm of real-time 3D graphics rendering, and the ongoing development of a material system promises further insights into the intricate world of graphics programming. `,
            imageSrc: painting,
            githubLink: 'https://github.com/chFleschutz/VulkaniteRenderEngine',
            tags: ['Computer Graphics', 'C++', 'Vulkan API', 'GLSL' , 'GLFW', 'GLM', 'tinyobjloader'],
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


