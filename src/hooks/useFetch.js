// Hooks
import { useState, useEffect, useContext } from 'react';

// Page Context
import { PageContext } from '../context/PageContext';

// Environment variables
const url = process.env.REACT_APP_BASE_URL;
const api_key = process.env.REACT_APP_API_KEY;

export const useFetch = () => {
    const [movies, setMovies] = useState([]);
    const { currentPage } = useContext(PageContext);

    const language = "language=pt-BR";

    useEffect(() => {
        // Function to get the top rated movies
        const fetchTopRatedMovies = async () => {
            const topRatedUrl = `${url}/top_rated?${api_key}&${language}`;

            try {
                const resp = await fetch(topRatedUrl);
                const data = await resp.json();
                
                setMovies(data.results);

            } catch(error) {
                console.log("Ocorreu um erro: ", error.message);
            }
        }

        fetchTopRatedMovies();
    }, []);


    useEffect(() => {
        if(currentPage !== 1) {
            // Update movies every time page value changes
            const updateMovies = async () => {
                const updateMoviesUrl = `${url}/top_rated?${api_key}&${language}&page=${currentPage}`;
    
                try {
                    const resp = await fetch(updateMoviesUrl);
                    const data = await resp.json();
    
                    setMovies((currentMovies) => [...currentMovies, ...data.results]);
    
                } catch(error) {
                    console.log("Ocorreu um erro ao atualizar: ", error.message);
                }
            }
            
            updateMovies();
        } 
    }, [currentPage]);

    return { movies }
}