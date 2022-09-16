// Components
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import NotFound from '../components/NotFound';

//CSS
import './MoviesLayout.css';

// Hooks
import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Search = () => {
    const [searchParams] = useSearchParams();
    const { searchMovies, loading, notFound } = useFetch(searchParams);
    
    const movieSearched = searchParams.get("query");

    return (
        <div className="main-container">
            {loading && <Loading />}
            {!loading && (
                <h2 id="searched-movie">
                    Resultados para: <span>{movieSearched}</span>
                </h2>
            )}
            <div className="movies-container">
                {searchMovies.length > 0 &&
                    searchMovies.map((movie) => (
                        <MovieCard 
                            key={movie.id} 
                            movie={movie} 
                        />
                    ))
                }
            </div>
            {notFound && <NotFound message="Nada encontrado!" type="search" />}
        </div>
    );
}

export default Search;