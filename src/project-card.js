import './styles.css'

export function setupProjectCard(title, description, imageSrc, githubLink, tags, imageLeftSide) {
    const imageElment = document.createElement('div');
    imageElment.className = 'card-image';
    imageElment.innerHTML = `
        <img src="${imageSrc}" alt="ProjectImage">
    `;

    const tagElments = tags.map(tag => `<p class="tag">${tag}</p>`).join('');
    const textElement = document.createElement('div');
    textElement.className = 'card-text';
    textElement.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <a href="${githubLink}" target="_blank" class="ghost-button">
            View on GitHub
            <span class="material-symbols-rounded">open_in_new</span>
        </a>
        <div class="tag-grid">
            ${tagElments}
        </div>
    `;

    const projectCard = document.createElement('div');
    projectCard.className = 'section-card';

    if (imageLeftSide) {
        projectCard.appendChild(imageElment);
        projectCard.appendChild(textElement);
    }
    else {
        projectCard.appendChild(textElement);
        projectCard.appendChild(imageElment);
    }

    return projectCard;

}