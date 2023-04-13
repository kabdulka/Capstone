import "../RecommendedMovies/RecommendedMovies.scss"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RecommendedMovies = () => {

    const apiKey = process.env.REACT_APP_API_KEY;
    // const [similarMovies, setSimilarMovies] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);

    // console.log(featured)

    function getSimilarMovies () {
        axios
        //https://api.themoviedb.org/3/movie/98/similar?api_key=3802e225b1fcc1ed8f104f47d3bdbef8&language=en-US&page=1
        // .get(`https://api.themoviedb.org/3/movie/550?api_key=3802e225b1fcc1ed8f104f47d3bdbef8`)
        .get(`https://api.themoviedb.org/3/movie/95/similar?api_key=${apiKey}&language=en-US&page=1&adult=false`)
        
        .then((response) => {
            console.log(response.data.results)
            setSimilarMovies(response.data.results)
        })
        .catch(err => {
            console.log(`Error in retrieving movie ${err}`)
        })
    }

    useEffect(() => {
        getSimilarMovies();
    }, [])

    const handleSwipe = (a) => {
        console.log(a)
    }    

    return (

        <>
            <section className="featured__movies">

                <h2 className="featured__movies__title">Movies You Might Like</h2>

                <div className="movie__container">
                    
                    <div className="movie__container__wrapper">
                        {/* <ul className="movie__container__movie-list"> */}
                        {
                            similarMovies?.map((movie) => 
                                <Link className="movie__container-link" to={`/${movie.id}`} >
                                    <div className="movie__container__movie-item">
                                        <img className="movie__container-image" src={"https://image.tmdb.org/t/p/w500/"+movie?.poster_path} />
                                    </div>
                                </Link>
                            )
                        }
                        
                            
                        {/* </ul> */}
                    </div>

                </div>
            </section>

        </>

    );
}

export default RecommendedMovies;