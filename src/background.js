import './styles.css'

function createBackgroundLines(topOffset, isLeftSide) {
    const lines = document.createElement('div');
    lines.className = 'bg-line-stripe';
    if (isLeftSide) {
        lines.style.left = '-50px';
    } else {
        lines.style.right = '-50px';
    }

    lines.style.top = `calc(100vh + ${topOffset}px)`;
    for (let i = 0; i < 4; i++) {
        const line = document.createElement('div');
        line.className = 'bg-line';
        lines.appendChild(line);
    }
    return lines;
}

export function setupBackground() {
    const background = document.createElement('div');
    background.className = 'background';
    background.appendChild(createBackgroundLines(-200, true));
    background.appendChild(createBackgroundLines(500, false));
    background.appendChild(createBackgroundLines(800, true));
    background.appendChild(createBackgroundLines(1500, false));
    background.appendChild(createBackgroundLines(1900, true));
    background.appendChild(createBackgroundLines(2600, false));
    background.appendChild(createBackgroundLines(2900, true));
    background.appendChild(createBackgroundLines(3600, false));
    return background;
}
