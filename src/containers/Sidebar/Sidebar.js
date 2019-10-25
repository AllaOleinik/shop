import './Sidebar.scss';

class Sidebar {
    constructor() {
        this.sidebar = document.createElement('aside');

        this.sidebar.className = 'Sidebar';

        return this.sidebar;
    }
}

export default Sidebar;
