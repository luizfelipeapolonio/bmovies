// Components
import MovieCard from '../components/MovieCard';

// Hooks
import { useFetch } from '../hooks/useFetch';
import { useEffect } from 'react';

// CSS
import './MoviesLayout.css';

const Home = () => {

    const {movies} = useFetch();

    console.log(movies);

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if(entries.some((entry) => entry.isIntersecting)) {
                // setCurrentPage((prevsValue) => prevsValue + 1);
                console.log("Está visível!");
            }
        });
        
        intersectionObserver.observe(document.querySelector('#sentinel'));

        return () => intersectionObserver.disconnect();
    }, []);

    return (
        <div className="main-container">
            <h1>Filmes mais bem avaliados</h1>
            <div className="movies-container">
                {movies.length > 0 &&
                    movies.map((movie) =>(
                        <MovieCard 
                            key={movie.id}
                            movie={movie}
                        />
                    ))    
                }
                <div id="sentinel">sentinel</div>
            </div>
        </div>
    );
}

export default Home;