import './Header.scss';
import Logo from '../../components/Logo/Logo';
import Search from '../../components/Search/Search';
import Button from '../../components/UI/Button/Button';

class Header {
    constructor() {
        this.header = document.createElement('header');

        this.header.className = 'Header';
        this.header.innerHTML = '<div class="HeaderWrapper"></div>';

        this.header.firstElementChild.append(
            new Logo('Space-X Online Shop'),
            new Search('Search...'),
            new Button({ text: 'Sign Up', className: 'Alternative' })
        );

        return this.header;
    }
}

export default Header;
