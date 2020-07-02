import { getMovies, getMovie, addMovie, deleteMovie } from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getMovie(id),
    },
    Mutation: {
        addMovie: (_, {
            title, eneTitle, poster, year, country, genre, run, summary, actor, producer 
        }) => addMovie(
            title, eneTitle, poster, year, country, genre, run, summary, actor, producer 
        ),
        deleteMovie: (_, { id }) => deleteMovie(id),
    }
}


export default resolvers;