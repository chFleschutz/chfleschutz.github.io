import './styles.css'

import { setupProjectCard } from './project-card';

import painting from './assets/painting.png';
import aegixImage from './assets/aegix-image.png';
import abductionImage from './assets/abduction-image.png';
import hiveMindImage from './assets/hive-mind-image.png';

export function setupProjects() {
    const projectSection = document.createElement('section');
    projectSection.id = 'projects';
    projectSection.innerHTML = `
        <h2>Selected Projects</h2>
    `;

    const projectData = [
        {
            title: 'Aegix Engine',
            description: `
            Aegix Engine is a lightweight, modern C++ game engine built using the Vulkan Graphics API. It features physically based shading, GLTF and OBJ mesh loading, an immediate mode editor GUI, and an Entity Component System. Aegix is designed as a foundational tool for developers interested in implementing advanced graphics algorithms. 
            <br>
            The engine is built with CMake and integrates several external libraries, including entt, glfw, glm, imgui, stb, and tinyobjloader.`,
            imageSrc: aegixImage,
            githubLink: 'https://github.com/chFleschutz/aegix-engine',
            tags: ['Game Engine', 'C++', 'Vulkan API' ],
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
            every time. The map boasts a range of terrain types, including lakes, mountains, and deserts, each with gameplay implications. For instance, 
            mountains or lakes limit the movement for some units. <br><br>
            The core gameplay revolves around turn-based mechanics. Players can strategically plan their moves carefully, and units will execute their 
            actions only after the turn has concluded. Additionally, the game incorporates a building system, enabling players to construct structures for 
            resource generation and unit deployment, thus introducing an additional layer of strategic depth and management complexity. Unit movement takes 
            place on a hexagonal grid, providing precise control and demanding thoughtful positioning. This system enriches gameplay and fosters strategic 
            thinking. <br><br>
            Benefiting from the capabilities of Unreal Engine 5, "Hive Mind" showcases cutting-edge advancements in graphics rendering and game development 
            technology.`,
            imageSrc: hiveMindImage,
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


