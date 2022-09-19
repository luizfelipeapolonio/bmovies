// Components
import Loading from '../components/Loading';

// CSS
import './MovieDetails.css';

// Icons
import { FaStar, FaRegFileAlt } from 'react-icons/fa';
import { BsWallet2, BsGraphUp } from 'react-icons/bs';

// Context
import { PageContext } from '../context/PageContext';

//Hooks
import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useEffect, useContext } from 'react';


const MovieDetails = () => {
    const { id } = useParams();
    const { movieDetails, loading } = useFetch(null, id);
    const { setCurrentPage } = useContext(PageContext);

    const posterImage = process.env.REACT_APP_POSTER_IMG;

    let date, dateFormat, localDateFormat;

    // Set date to local date format
    if(movieDetails.release_date) {
        date = movieDetails.release_date;
        dateFormat = date.split("-").reverse().join();
        localDateFormat = dateFormat.replaceAll(",", " / ");
    } else {
        localDateFormat = "Sem informações";
    }

    // Set the page value when the page is up
    useEffect(() => {
        setCurrentPage(1);
    }, [setCurrentPage]);


    // Convert values to the dollar format
    const currencyConvert = (value) => {
        return value.toLocaleString("en-US", {
            style: "currency", 
            currency: "USD",
        });
    }

    console.log(movieDetails);

    return (
        <>
        {loading ? <Loading /> : (
            <div className="moviedetails-container">
                {movieDetails.poster_path && (
                    <img src={`${posterImage}${movieDetails.poster_path}`} alt="Movie Poster" />
                    )
                }
                <div className="movie-content">
                    <h1>{movieDetails.title}</h1>
                    {movieDetails.vote_average > 0 && (
                        <p id="vote"><FaStar />{movieDetails.vote_average.toFixed(1)}</p>
                    )}
                    <div className="header-info">
                        <ul>
                            <li><span id="release">Lançamento: </span>{localDateFormat}</li>
                            <li>
                                <span id="genre">Gênero:</span> 
                                {movieDetails.genres && (
                                    movieDetails.genres.map((genre) => (
                                    <span key={genre.id}>| {genre.name} </span>
                                ))
                            )}
                            </li>
                            <li><span id="runtime">Duração: </span>{movieDetails.runtime} min</li>
                        </ul> 
                    </div>
                    <div className="tagline">
                        {movieDetails.tagline && (
                            <p>"{movieDetails.tagline}"</p>
                        )}
                    </div>
                    <div className="movie-info">
                        <h3><BsWallet2 /> Orçamento:</h3>
                        {movieDetails.budget > 0 ? (
                            <p>{currencyConvert(movieDetails.budget)}</p>
                        ) : (
                            <p>Sem informações</p>
                        )}
                    </div>
                    <div className="movie-info">
                        <h3><BsGraphUp /> Receita:</h3>
                        {movieDetails.revenue > 0 ? (
                            <p>{currencyConvert(movieDetails.revenue)}</p>
                        ) : (
                            <p>Sem informações</p>
                        )} 
                    </div>
                    <div className="overview">
                        <h3><FaRegFileAlt /> Sinopse:</h3>
                        {movieDetails.overview ? (
                            <p>{movieDetails.overview}</p>
                        ) : (
                            <p>Sem informações</p>
                            )
                        }
                    </div>
                </div>
            </div>
        )}
        </>
    );
}

export default MovieDetails;