import { useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        const response = await axios.get(`https://www.omdbapi.com/?apikey=ваш_apikey&s=${query}`);
        setMovies(response.data.Search || []);
    };

    return (
        <div>
            <form onSubmit={searchMovies}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Введите название фильма"
                />
                <button type="submit">Поиск</button>
            </form>
            <div>
                {movies.length > 0 && (
                    <ul>
                        {movies.map(movie => (
                            <li key={movie.imdbID}>{movie.Title} ({movie.Year})</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Search;