import './Input.scss';

class Input {
    constructor({ type = 'text', placeholder = '' }) {
        this.input = document.createElement('input');

        this.input.className = 'Input';
        this.input.type = type;
        this.input.placeholder = placeholder;

        this.input.addEventListener('focus', this.onFocusHandler);
        this.input.addEventListener('blur', this.onBlurHandler);

        return this.input;
    }

    onFocusHandler(e) {
        e.target.nextElementSibling.classList.toggle('Active');
    }

    onBlurHandler(e) {
        e.target.nextElementSibling.classList.toggle('Active');
    }
}

export default Input;
