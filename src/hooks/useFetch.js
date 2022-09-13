import { useState, useEffect } from 'react';

// Environment variables
const url = process.env.REACT_APP_BASE_URL;
const api_key = process.env.REACT_APP_API_KEY;

export const useFetch = () => {
    const [movies, setMovies] = useState([]);

    // Function to get the top rated movies
    const fetchTopRatedMovies = async () => {
        const language = "language=pt-BR"
        const topRatedUrl = `${url}/top_rated?${api_key}&${language}`;

        try {
            const resp = await fetch(topRatedUrl);
            const data = await resp.json();

            setMovies(data.results);

        } catch(error) {
            console.log("Ocorreu um erro: ", error.message);
        }
    }

    useEffect(() => {
        fetchTopRatedMovies();
    }, []);

    return { movies }
}