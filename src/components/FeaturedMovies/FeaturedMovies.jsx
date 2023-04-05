
import "../FeaturedMovies/FeaturedMovies.scss"
import { CardSwiper } from "react-card-rotate-swiper";
import Cards, { Card } from 'react-swipe-card'
import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../Movie/Movie";
import { Link } from "react-router-dom";

const FeaturedMovies = ({featured}) => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const [featuredMovies, setFeaturedMovies] = useState([]);
    // console.log(featured)

    function getFeaturedMovies () {
        axios
        // .get(`https://api.themoviedb.org/3/movie/550?api_key=3802e225b1fcc1ed8f104f47d3bdbef8`)
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1&adult=false`)
        
        .then((response) => {
            console.log(response.data.results)
            setFeaturedMovies(response.data.results)
        })
        .catch(err => {
            console.log(`Error in retrieving movie ${err}`)
        })
    }

    useEffect(() => {
        getFeaturedMovies();
    }, [])

    const handleSwipe = (a) => {
        console.log(a)
    }    

    return (
        <>
            <section className="featured__movies">

                <h2 className="featured__movies__title">Featured Movies</h2>

                <div className="movie__container">
                    
                    <div className="movie__container__wrapper">
                        {/* <ul className="movie__container__movie-list"> */}
                        {
                            featuredMovies?.map((movie) => 
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

export default FeaturedMovies;