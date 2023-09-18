import './styles.css'

export function setupBackground() {
    const background = document.createElement('div');
    background.className = 'background';
    background.innerHTML = `
    <div class="bg-line-stripe" style="left: -50px; top: 800px;">
        <div class="bg-line"></div>
        <div class="bg-line"></div>
        <div class="bg-line"></div>
        <div class="bg-line"></div>
    </div>
    <div class="bg-line-stripe" style="right: -50px; top: 1500px;">
        <div class="bg-line"></div>
        <div class="bg-line"></div>
        <div class="bg-line"></div>
        <div class="bg-line"></div>
    </div>
    <div class="bg-line-stripe" style="left: -50px; top: 1900px;">
        <div class="bg-line"></div>
        <div class="bg-line"></div>
        <div class="bg-line"></div>
        <div class="bg-line"></div>
    </div>
    <div class="bg-line-stripe" style="right: -50px; top: 2600px;">
        <div class="bg-line"></div>
        <div class="bg-line"></div>
        <div class="bg-line"></div>
        <div class="bg-line"></div>
    </div>
    <div class="bg-line-stripe" style="left: -50px; top: 3000px;">
        <div class="bg-line"></div>
        <div class="bg-line"></div>
        <div class="bg-line"></div>
        <div class="bg-line"></div>
    </div>
    <div class="bg-line-stripe" style="right: -50px; top: 3700px;">
        <div class="bg-line"></div>
        <div class="bg-line"></div>
        <div class="bg-line"></div>
        <div class="bg-line"></div>
    </div>
    <div class="bg-line-stripe" style="left: -50px; top: 4100px;">
        <div class="bg-line"></div>
        <div class="bg-line"></div>
        <div class="bg-line"></div>
        <div class="bg-line"></div>
    </div>
    <div class="bg-line-stripe" style="right: -50px; top: 4800px;">
        <div class="bg-line"></div>
        <div class="bg-line"></div>
        <div class="bg-line"></div>
        <div class="bg-line"></div>
    </div>
    `;
    return background;
}
