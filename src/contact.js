import './styles.css'
import { copyToClipboard } from './utils.js';

export function setupContact() {
    const contact = document.createElement('section');
    contact.id = 'contact';
    contact.innerHTML = `
    <div class="gradient-box">
        <h2>Get in Touch</h2>
        <h4>If you have any questions don’t hesitate to contact me</h4>
        <div class="outline-box">
            <p id="email">ch.fleschutz@gmail.com</p>
            <div class="icon-button" id="copyButton">
                <span class="material-symbols-rounded">content_copy</span>
            </div>
        </div>
    </div>
    `;

    const copyButton = contact.querySelector('#copyButton');
    copyButton.addEventListener('click', () => copyToClipboard('email'));

    return contact;
}