import movies from './movies';
import axios from 'axios';


export const getMovies = () => movies;

export const getMoive = (id) => {
    const movie = movies.filter(movie => movie.id === id);
    return movie[0];
};

export const addMovie = (title, eneTitle, poster, year, country, genre, run, summary, actor, producer ) => {
    const newMovie = {
        id: movies.length + 1,
        title,
        eneTitle,
        poster,
        year,
        country,
        genre,
        run,
        summary,
        actor,
        producer,
    }
    movies.push(newMovie);
    return newMovie
}

export const deleteMovie = (id) => {
    const result = moives.fileter(movie => movie.id !== id);
    if(movies.length > result.length) {
        movies = result;
        return true;
    }else {
        return false;
    }
}