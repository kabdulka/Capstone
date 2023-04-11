import Movie from "../Movie/Movie";
import "../MovieList/MovieList.scss";
import uuid from 'react-uuid';

const MovieList = ({movies}) => {

    console.log("movies are: ")
    console.log(movies)

    return (

        <>
            <section className="movies__container">
                <ul className="movies__list">

                    {movies?.map(movie => 
                        <Movie
                            key={uuid()}
                            movie={movie}
                        />
                    )}

                </ul>
            </section>

        </>

    );
}

export default MovieList;