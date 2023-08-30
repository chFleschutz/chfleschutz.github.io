import './styles.css'

export function setupContact() {
    const contact = document.createElement('section');
    contact.className = 'section';
    contact.id = 'contact';
    contact.innerHTML = `
    <div class="gradient-box">
        <h2>Get in Touch</h2>
        <h4>If you have any questions don’t hesitate to contact me</h4>
        <div class="outline-box">
            <p id="email">ch.fleschutz@gmail.com</p>
            <div class="icon-button" onclick="copyToClipboard('email')">
                <span class="material-symbols-rounded">content_copy</span>
            </div>
        </div>
    </div>
    `;
    return contact;
}