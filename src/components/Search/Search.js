import Input from '../UI/Input/Input';
import './Search.scss';

class Search {
    constructor(searchPlaceholder) {
        this.search = document.createElement('div');

        this.search.className = 'Search';
        this.search.innerHTML = '<i class="fas fa-search"></i>';

        this.search.prepend(new Input({
            placeholder: searchPlaceholder
        }));

        return this.search;
    }
}

export default Search;
