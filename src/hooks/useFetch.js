// Hooks
import { useState, useEffect, useContext } from 'react';

// Page Context
import { PageContext } from '../context/PageContext';

// Environment variables
const baseUrl = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;
const searchUrl = process.env.REACT_APP_SEARCH_URL;

export const useFetch = (query = null) => {
    const [movies, setMovies] = useState([]);
    const [searchMovies, setSearchMovies] = useState([]);
    const { currentPage } = useContext(PageContext);
    const [loading, setLoading] = useState(false);

    const language = "language=pt-BR";

    useEffect(() => {
        // Function to get the top rated movies
        const fetchTopRatedMovies = async () => {
            const topRatedUrl = `${baseUrl}/top_rated?${apiKey}&${language}`;

            setLoading(true);

            try {
                const resp = await fetch(topRatedUrl);
                const data = await resp.json();
                
                setMovies(data.results);

            } catch(error) {
                console.log("Ocorreu um erro: ", error.message);
            }

            setLoading(false);
        }

        fetchTopRatedMovies();
    }, []);


    useEffect(() => {
        if(currentPage !== 1) {
            // Update movies every time page value changes
            const updateMovies = async () => {
                const updateMoviesUrl = `${baseUrl}/top_rated?${apiKey}&${language}&page=${currentPage}`;
                
                setLoading(true);

                try {
                    const resp = await fetch(updateMoviesUrl);
                    const data = await resp.json();
    
                    setMovies((currentMovies) => [...currentMovies, ...data.results]);
    
                } catch(error) {
                    console.log("Ocorreu um erro ao atualizar: ", error.message);
                }

                setLoading(false);
            }
            
            updateMovies();
        } 
    }, [currentPage]);

    useEffect(() => {
        const searchMovie = async () => {
            const searchMovieUrl = `${searchUrl}${apiKey}&${language}&${query}`;

            if(query !== null) {

                setLoading(true);
                
                try {
                    const resp = await fetch(searchMovieUrl);
                    const data = await resp.json();

                    setSearchMovies(data.results);

                } catch(error) {
                    console.log("Ocorreu um erro ao buscar: ", error.message);
                }

                setLoading(false);
            }
        }

        searchMovie();
    }, [query]);

    return { movies, loading, searchMovies }
}