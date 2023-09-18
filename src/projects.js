import './styles.css'

import { setupProjectCard } from './project-card';

import painting from './assets/painting.png';
import abductionImage from './assets/abduction-image.png';

export function setupProjects() {
    const projectSection = document.createElement('section');
    projectSection.id = 'projects';
    projectSection.innerHTML = `
        <h2>Selected Projects</h2>
    `;

    const projectData = [
        {
            title: 'Vulkanite Render Engine (Work in Progress)',
            description: `The Vulkanite Render Engine is an intriguing work-in-progress project that originated as part of my Bachelor's thesis. 
            Developed in parallel with the thesis, its primary goal is to push the boundaries of real-time 3D graphics rendering, providing a valuable 
            platform for learning and experimentation. <br><br>

            Key features include leveraging the capabilities of the Vulkan API for in-depth exploration of modern graphics programming, efficient 3D model 
            handling for practical three-dimensional transformations and representation studies. The engine's versatility extends to support various 
            lighting scenarios, including per-fragment lighting with directional lights and a limited number of point lights, offering a comprehensive 
            understanding of lighting in rendering. <br><br>
            
            Technologies such as GLFW for window management, GLM for mathematical operations, and tiny-object-loader for seamless model integration 
            provide the essential tools for exploration. <br><br>
            
            Together, these components create a dynamic learning experience in the realm of real-time 3D graphics rendering, and future development of 
            a physically-based material system promises further insights into the intricate world of programming a render engine.`,
            imageSrc: painting,
            githubLink: 'https://github.com/chFleschutz/VulkaniteRenderEngine',
            tags: ['Vulkan API', 'C++', 'GLSL' , 'GLFW', 'GLM', 'tiny-obj-loader', 'Real-Time Rendering' ],
            imageLeftSide: true
        },
        {
            title: 'Abduction in Lab 42',
            description: `Abduction in Lab 42 is a Virtual Reality (VR) game developed using the Unity game engine. It was created during our sixth semester 
            in collaboration with a group of fellow students. In this VR experience, players will encounter three distinct levels, each presenting unique 
            challenges and puzzles. <br><br>
            In the first level, players are tasked with collecting hidden gems. The second level introduces a puzzle element where players must manipulate 
            lasers to hit specific targets. The final level adds an element of defense, requiring players to protect their robot companion from waves of 
            enemies. <br><br>
            To deliver an immersive  VR experience, we utilized a Pimax VR headset and Valve Index Controllers, ensuring seamless interactions within the game 
            environment. Additionally, all 3D models in the game were created using Blender, enhancing the world's detail and depth. <br><br>            
            This project was supervised and evaluated by Prof. Dr. Bichlmeier, our class professor, whose guidance and expertise significantly contributed to 
            the game's development. It stands as a testament to our collaborative efforts and dedication to creating an engaging VR gaming experience during 
            our academic journey.`,
            imageSrc: abductionImage,
            githubLink: 'https://github.com/chFleschutz/abduction-in-lab-42',
            tags: ['Unity Game Engine', 'C#', 'Virtual Reality', 'Blender', 'Game Development'],
            imageLeftSide: false
        },
        {
            title: 'Hive Mind',
            description: `Hive Mind is a turn-based strategy game developed with Unreal Engine 5.1.<br><br>
            The game features procedurally generated hexagonal maps using Perlin noise. This technique ensures the creation of diverse and unique landscapes
            every time. The map boasts a range of terrain types, including lakes, mountains, and deserts, each with gameplay implications. For instance, units 
            cannot traverse mountains or lakes. <br><br>
            The core gameplay revolves around turn-based mechanics. Players can strategically plan their moves carefully, and units will execute their 
            actions only after the turn has concluded. Additionally, the game incorporates a building system, enabling players to construct structures for 
            resource generation and unit deployment, thus introducing an additional layer of strategic depth and management complexity. Unit movement takes 
            place on a hexagonal grid, providing precise control and demanding thoughtful positioning. This system enriches gameplay and fosters strategic 
            thinking. <br><br>
            Benefiting from the capabilities of Unreal Engine 5, "Hive Mind" showcases cutting-edge advancements in graphics rendering and game development 
            technology.<br><br>
            Explore the technical intricacies of "Hive Mind," immersing yourself in the world of procedural generation, hexagonal tile movement, and 
            strategic gameplay, all enhanced by the power and beauty of Unreal Engine 5.`,
            imageSrc: painting,
            githubLink: 'https://github.com/chFleschutz/hive-mind',
            tags: ['Unreal Engine', 'C++', 'Procedural Generation', 'Blender', 'Game Development'],
            imageLeftSide: true
        }
    ]

    projectData.forEach(project => {
        projectSection.appendChild(setupProjectCard(project.title, project.description, project.imageSrc, project.githubLink, project.tags, project.imageLeftSide));
    });

    const moreSection = document.createElement('div');
    moreSection.className = 'more-projects';
    moreSection.innerHTML = `
        <p>View more projects on my <a href="https://github.com/chFleschutz" target="_blank">GitHub</a> profile</p>
    `;
    projectSection.appendChild(moreSection);

    return projectSection;
}


