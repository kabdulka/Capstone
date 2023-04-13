import Movie from "../Movie/Movie";
import "../MovieList/MovieList.scss";
import uuid from 'react-uuid';

const MovieList = ({movies, isLiked, handleMovieDelete}) => {

    console.log("movies are: ", isLiked)
    console.log(movies)

    return (

        <>
            <section className="movies__container">
                <ul className="movies__list">

                    {movies?.map(movie => 
                        <Movie
                            isLiked={isLiked}
                            key={uuid()}
                            movie={movie}
                            handleMovieDelete={handleMovieDelete}
                        />
                    )}

                </ul>
            </section>

        </>

    );
}

export default MovieList;