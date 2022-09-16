// CSS
import './MovieCard.css';

//Icons
import { FaStar, FaFrown } from 'react-icons/fa';

// React Router
import { Link } from 'react-router-dom';


const MovieCard = ({ movie }) => {
    const posterImage = process.env.REACT_APP_POSTER_IMG;
    let date, dateFormat, localDateFormat;

    // Set date to local date format
    if(movie.release_date) {
        date = movie.release_date;
        dateFormat = date.split("-").reverse().join();
        localDateFormat = dateFormat.replaceAll(",", " / ");
    } else {
        localDateFormat = "Sem informações";
    }
    

    return (
        <div className="card-container">
            {movie.poster_path ? (
                <img 
                    src={`${posterImage}${movie.poster_path}`} 
                    alt="Movie poster"
                />
            ) : ( 
                    <div id="notfound-icon">
                        <FaFrown />
                        <p>Oops!</p>
                        <p>Poster not found</p>
                    </div>  
                )
            }
            <h2>{movie.title}</h2>
            <div id="date">
                <p>Lançamento: </p>
                <p>{localDateFormat}</p>
            </div>
            <p id="vote-average"><FaStar /> {movie.vote_average}</p>
            <Link to={`/movie/${movie.id}`}>
                Detalhes
            </Link>
        </div>
    );
}

export default MovieCard;