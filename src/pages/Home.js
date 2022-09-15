// Components
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

// Hooks
import { useFetch } from '../hooks/useFetch';
import { useEffect, useContext, useRef } from 'react';

// Page Context
import { PageContext } from '../context/PageContext';

// CSS
import './MoviesLayout.css';

const Home = () => {

    const {movies, loading} = useFetch();
    const { currentPage, setCurrentPage } = useContext(PageContext);
    const divSentinelRef = useRef();

    // Update page value every time scroll reaches the end of the page
    useEffect(() => {
        if(movies.length > 0) {
            const intersectionObserver = new IntersectionObserver((entries) => {
                if(entries.some((entry) => entry.isIntersecting)) {
                    setCurrentPage((currentPage) => currentPage + 1);
                    console.log("Está visível");
                }
            });

            intersectionObserver.observe(divSentinelRef.current);

            return () => intersectionObserver.disconnect();
        }
    }, [movies, setCurrentPage]);

    console.log(movies);
    console.log(currentPage);

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
                {loading && <Loading />}
                <div id="sentinel" ref={divSentinelRef}></div>
            </div>
        </div>
    );
}

export default Home;