import './Footer.scss';

class Footer {
    constructor() {
        this.footer = document.createElement('footer');
        const date = new Date().getFullYear();

        this.footer.className = 'Footer';
        this.footer.innerHTML = `
            <strong>All Rights Reserved ${date}</strong>
        `;

        return this.footer;
    }
}

export default Footer;
