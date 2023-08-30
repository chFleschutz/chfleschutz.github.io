import './styles.css'

export function setupHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <header class="header">
            <h1>Christoph Fleschutz</h1>
            <div class="nav-bar">
                <a href="#about-me">about me</a>
                <a href="#projects">projects</a>
                <a href="#contact">contact</a>
            </div>
        </header>
    `;
    return header;
}