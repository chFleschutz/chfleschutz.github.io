import './styles.css'

export function setupProjects() {
    const projects = document.createElement('section');
    projects.className = 'section';
    projects.id = 'projects';
    projects.innerHTML = `
    <h2>Selected Projects</h2>
    <div class="section-card">
        <div class="card-image">
            <img src="images/painting.png" alt="Project 1">
        </div>
        <div class="card-text">
            <h3>Project Title 1</h3>
            <p>Lorem ipsum dolor sit amet... and much more interesting nonsense for this beautifull project view
                it now with the button below Lorem ipsum dolor sit amet... and much more interesting nonsense
                for this beautifull project view
                it now with the button belo Lorem ipsum dolor sit amet... and much more interesting nonsense for
                this beautifull project view
                it now with the button belo Lore<br> ipsum dolor sit amet... and much more interesting nonsense
                for this beautifull project view
                it now with the button belo Lorem ipsum dolor sit amet... and much more interesting nonsense for
                this beautifull project view
                it now with the button belo Lorem ipsum dolor sit amet... and much more interesting nonsense for
                this beautifull project view
                it now with the button belo</p>
            <a href="#" target="_blank" class="ghost-button">
                View on GitHub
                <span class="material-symbols-rounded">open_in_new</span>
            </a>
            <div class="tag-grid">
                <p class="tag">C#</p>
                <p class="tag">Unity</p>
                <p class="tag">Blender</p>
                <p class="tag">Visual Studio</p>
                <p class="tag">Virtual Reality</p>
                <p class="tag">Steam VR</p>
            </div>
        </div>
    </div>
    <div class="section-card">
        <div class="card-text">
            <h3>Project Title 1</h3>
            <p>Lorem ipsum dolor sit amet... and much more interesting nonsense for this beautifull project view
                it now with the button below Lorem ipsum dolor sit amet... and much more interesting nonsense
                for this beautifull project view
                it now with the button belo Lorem ipsum dolor sit amet... and much more interesting nonsense for
                this beautifull project view
                it now with the button belo Lore<br> ipsum dolor sit amet... and much more interesting nonsense
                for this beautifull project view
                it now with the button belo Lorem ipsum dolor sit amet... and much more interesting nonsense for
                this beautifull project view
                it now with the button belo Lorem ipsum dolor sit amet... and much more interesting nonsense for
                this beautifull project view
                it now with the button belo</p>
            <a href="#" class="ghost-button">
                View on GitHub
                <span class="material-symbols-rounded">open_in_new</span>
            </a>
            <div class="tag-grid">
                <p class="tag">C#</p>
                <p class="tag">Unity</p>
                <p class="tag">Blender</p>
                <p class="tag">Visual Studio</p>
                <p class="tag">Virtual Reality</p>
                <p class="tag">Steam VR</p>
            </div>
        </div>
        <div class="card-image">
            <img src="images/painting.png" alt="Project 2">
        </div>
    </div>
    <div class="section-card">
        <div class="card-image">
            <img src="images/painting.png" alt="Project 3">
        </div>
        <div class="card-text">
            <h3>Project Title 1</h3>
            <p>Lorem ipsum dolor sit amet... and much more interesting nonsense for this beautifull project view
                it now with the button below Lorem ipsum dolor sit amet... and much more interesting nonsense
                for this beautifull project view
                it now with the button belo Lorem ipsum dolor sit amet... and much more interesting nonsense for
                this beautifull project view
                it now with the button belo Lore<br> ipsum dolor sit amet... and much more interesting nonsense
                for this beautifull project view
                it now with the button belo Lorem ipsum dolor sit amet... and much more interesting nonsense for
                this beautifull project view
                it now with the button belo Lorem ipsum dolor sit amet... and much more interesting nonsense for
                this beautifull project view
                it now with the button belo</p>
            <a href="#" class="ghost-button">
                View on GitHub
                <span class="material-symbols-rounded">open_in_new</span>
            </a>
            <div class="tag-grid">
                <p class="tag">C#</p>
                <p class="tag">Unity</p>
                <p class="tag">Blender</p>
                <p class="tag">Visual Studio</p>
                <p class="tag">Virtual Reality</p>
                <p class="tag">Steam VR</p>
                <p class="tag">C++</p>
                <p class="tag">Vulkan</p>
                <p class="tag">Qt</p>
                <p class="tag">Unreal</p>
                <p class="tag">Git</p>
                <p class="tag">Github</p>
                <p class="tag">Bachelor</p>
                <p class="tag">University</p>
                <p class="tag">Kempten</p>
                <p class="tag">Game Engineering</p>
                <p class="tag">Computer Science</p>
                <p class="tag">Programming</p>
                <p class="tag">C++</p>
                <p class="tag">Vulkan</p>
                <p class="tag">Qt</p>
                <p class="tag">Unreal</p>
            </div>
        </div>
    </div>
    `;	
    return projects;
}