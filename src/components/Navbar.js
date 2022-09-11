// Components
import SearchForm from './SearchForm';

// CSS
import './Navbar.css';

// Icons
import { BsCameraReels } from 'react-icons/bs';

// React Router Dom
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="container">
            <div className="logo">
                <Link to="/">
                    <BsCameraReels /><span>B</span>Movies
                </Link>
            </div>
            <div>
                <SearchForm />
            </div>
        </nav>
    );
}

export default Navbar;