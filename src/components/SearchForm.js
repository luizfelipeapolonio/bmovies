// Icon
import { FaSearch } from 'react-icons/fa';

// CSS
import './SearchForm.css';

const SearchForm = () => {
    return (
        <form>
            <div className="container-form">
                <input type="text" placeholder="Busque um filme" />
                <button type="submit"><FaSearch /></button>
            </div>
        </form>
    );
}

export default SearchForm;