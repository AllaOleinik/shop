import './Button.scss';

class Button {
    constructor({ type = 'button', text, className }) {
        this.button = document.createElement('button');

        this.button.type = type;
        this.button.textContent = text;
        this.button.className = className
            ? `Button ${className}`
            : 'Button';

        return this.button;
    }
}

export default Button;
