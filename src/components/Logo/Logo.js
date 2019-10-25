import './Logo.scss';
import logoSrc from '../../assets/images/logo.webp';

class Logo {
    constructor(title) {
        this.logo = document.createElement('div');
        const image = new Image();
        const logoTitle = document.createElement('h1');

        this.logo.className = 'Logo';
        this.logo.innerHTML = '<div class="ImageWrapper"></div>';
        image.src = logoSrc;
        logoTitle.className = 'LogoTitle';
        logoTitle.textContent = title;

        this.logo.firstElementChild.append(image);
        this.logo.append(logoTitle);

        return this.logo;
    }
}

export default Logo;
