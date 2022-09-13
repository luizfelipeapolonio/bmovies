// CSS
import './MovieCard.css';

//Icons
import { FaStar } from 'react-icons/fa';

// React Router
import { Link } from 'react-router-dom';


const MovieCard = ({ movie }) => {
    const posterImage = process.env.REACT_APP_POSTER_IMG;

    // Set date to local date format
    let date = movie.release_date;
    let dateFormat = date.split("-").reverse().join();
    let localDateFormat = dateFormat.replaceAll(",", " / ");

    return (
        <div className="card-container">
            <img 
                src={`${posterImage}${movie.poster_path}`} 
                alt="Movie poster"
            />
            <h2>{movie.title}</h2>
            <div id="date">
                <p>Lançamento: </p>
                <p>{localDateFormat}</p>
            </div>
            <p id="vote-average"><FaStar /> {movie.vote_average}</p>
            <Link to="/search">
                Detalhes
            </Link>
        </div>
    );
}

export default MovieCard;