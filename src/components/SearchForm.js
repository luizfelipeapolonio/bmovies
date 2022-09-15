// Icon
import { FaSearch } from 'react-icons/fa';

// CSS
import './SearchForm.css';

// Context
import { PageContext } from '../context/PageContext';

// Hooks
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
    const [query, setQuery] = useState("");
    const { setCurrentPage } = useContext(PageContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/search?q=${query}`);

        console.log("Query: ", query);
        
        setQuery("");
        setCurrentPage(1);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container-form">
                <input 
                    type="text" 
                    placeholder="Busque um filme"
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit"><FaSearch /></button>
            </div>
        </form>
    );
}

export default SearchForm;