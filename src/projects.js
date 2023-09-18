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
            description: `Vulkanite Render Engine stands as an intriguing work-in-progress project, originating from an exercise for my Bachelor's thesis. Developed in alongside with the thesis, its primary goal is to explore the boundaries of real-time 3D graphics rendering, offering a valuable platform for learning and experimentation. <br><br>
                Key features include harnessing the capabilities of the Vulkan API for in-depth exploration of modern graphics programming, efficient 3D model handling for hands-on 3-dimensional transformations and representation studies, and the integration of a Blinn-Phong shader to dive deep into per-fragment lighting. The engine's versatility extends to supporting various lighting scenarios, encompassing directional lights and a limited number of point lights for a comprehensive understanding of lighting in rendering. <br><br>
                Technologies such as GLFW for window management, GLM for mathematical operations, and tiny object loader for seamless model integration provide the necessary tools for exploration. <br><br>
                Together, these components create a dynamic learning experience in the realm of real-time 3D graphics rendering, and the ongoing development of a material system promises further insights into the intricate world of graphics programming. `,
            imageSrc: painting,
            githubLink: 'https://github.com/chFleschutz/VulkaniteRenderEngine',
            tags: ['Computer Graphics', 'C++', 'Vulkan API', 'GLSL' , 'GLFW', 'GLM', 'tinyobjloader'],
            imageLeftSide: true
        },
        {
            title: 'Abduction in Lab 42',
            description: `Abduction in Lab 42 is a Virtual Reality (VR) game developed using the Unity game engine. It was created during our sixth semester in collaboration with a group of fellow students. In this VR experience, players will encounter three distinct levels, each presenting unique challenges and puzzles. <br><br>
            In the first level, players are tasked with collecting gems hidden within Lab 42's enigmatic chambers. The second level introduces a puzzle element where players must manipulate lasers to hit specific targets. The final level adds an element of defense, as players must protect their robot companion from waves of enemies. <br><br>
            To deliver an authentic VR experience, we utilized VR headsets and SteamVR controllers to ensure immersive interactions within the game environment. Additionally, all 3D models in the game were created using Blender, adding detail and depth to the world. <br><br>            
            This project was supervised and evaluated by Prof. Dr. Bichlmeier, our class professor, whose guidance and expertise played a significant role in the development of Abduction in Lab 42. It stands as a testament to our collaborative efforts and dedication to creating an engaging VR gaming experience during our academic journey.`,
            imageSrc: painting,
            githubLink: 'https://github.com/chFleschutz/abduction-in-lab-42',
            tags: ['Virtual Reality', 'Unity Game Engine', 'C#', 'Blender', 'Game Development'],
            imageLeftSide: false
        },
        {
            title: 'Hive Mind',
            description: `"Hive Mind" is a turn-based strategy game developed with Unreal Engine 5.1.<br><br>
            The game features procedurally generated hexagonal maps using Perlin noise. This technique ensures the creation of diverse and unique landscapes every time. The map boasts a range of terrain types, including lakes, mountains, and deserts, each with significant gameplay implications; for instance, units cannot traverse mountains or lakes. <br><br>
            The core gameplay revolves around turn-based mechanics. Players can strategically plan their moves carefully, and units will execute their actions only after the turn has concluded. Additionally, the game incorporates a building system, enabling players to construct structures for resource generation and unit deployment, thus introducing an additional layer of strategic depth and management complexity. Unit movement takes place on a hexagonal grid, providing precise control and demanding thoughtful positioning. This system enriches gameplay and fosters strategic thinking. <br><br>
            Benefiting from the capabilities of Unreal Engine 5, "Hive Mind" showcases cutting-edge advancements in graphics rendering and game development technology.<br><br>
            Explore the technical intricacies of "Hive Mind," immersing yourself in the world of procedural generation, hexagonal tile movement, and strategic gameplay, all enhanced by the power and beauty of Unreal Engine 5.`,
            imageSrc: painting,
            githubLink: 'https://github.com/chFleschutz/Project_Hive',
            tags: ['C++', 'Unreal Engine', 'Game Development'],
            imageLeftSide: true
        }
    ]

    projectData.forEach(project => {
        projectSection.appendChild(setupProjectCard(project.title, project.description, project.imageSrc, project.githubLink, project.tags, project.imageLeftSide));
    });

    return projectSection;
}


