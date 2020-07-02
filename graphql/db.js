import movies from './movies';
import axios from 'axios';


export const getMovies = () => movies;

export const getMoive = (id) => {
    const movie = movies.filter(movie => movie.id === id);
    return movie[0];
};