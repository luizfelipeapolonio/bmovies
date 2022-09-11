import { useEffect } from 'react';

const url = process.env.REACT_APP_BASE_URL;
const api_key = process.env.REACT_APP_API_KEY;

const Home = () => {

    const fetchTopRatedMovies = async (url) => {

        try {
            const resp = await fetch(url);
            const json = await resp.json();

            console.log(json);

        } catch(error) {
            console.log("Ocorreu um erro: ", error.message);
        }
    }

    useEffect(() => {
        const topRatedUrl = `${url}/top_rated?${api_key}`;

        fetchTopRatedMovies(topRatedUrl);
    }, []);

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

export default Home;