import './styles.css'

export function setupFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
    <p>&copy; 2023 Created by Christoph Fleschutz</p>
    <div class="gradient-line"></div>
    `;
    return footer;
}