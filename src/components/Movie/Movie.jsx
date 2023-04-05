
import { Link } from "react-router-dom";
import "../Movie/Movie.scss"
import { useState, useEffect } from "react";
import axios from "axios";

const Movie = ({movie}) => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const [selectedMovie, setSelectedMovie] = useState({})

    const backgroundImgStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${selectedMovie.backdrop_path})`,
        backgroundSize: "cover",
        // background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(https://image.tmdb.org/t/p/w500/${selectedMovie.backdrop_path})`,
        // opacity: "0.5"
    };


    const getGenreNames = (genres) => {
        let result = "";
        genres.forEach((genre) => {
            result += genre.name + ","
        })
        
        return result;
    }

    const getMovieInfo = () => {

        const url = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&language=en-US&adult=false`;
        axios
        .get(url)
        .then((response => {
            console.log(response.data);
            console.log(response.data.genres);
            setSelectedMovie(response.data)
        }))
        .catch(err => {
            console.log(`could not find movie ${err}`);
        }) 
    }


    useEffect(() => {
        getMovieInfo();
    }, [])

    return (

        selectedMovie.genres?  

        <>
           
                <li className="movie__item" >
                  
                    {/* <div className="movie__item-background" style={backgroundImgStyle}> */}
                   
                    <div className="movie__item-main" >
                    {/* <img src={movie.poster_path} /> */}
                        <div className="movie__item-poster">
                            <Link to={`/${selectedMovie.id}`}>
                                <img className="movie__item-poster__image" src={"https://image.tmdb.org/t/p/w500/"+selectedMovie.poster_path} />
                            </Link>
                        </div>
                        {/* <div className="movie__item-info"> */}
                            <div className="movie__item-details">
                                <div className="movie__item-details__1">
                                    <h3 className="movie__title"> {movie.title} </h3>
                                    <p className="movie__duration"> {movie.release_date} </p>
                                </div>
                               
                                <div className="movie__item-details__2">
                                    <p class="movie__item__runtime"> {selectedMovie.runtime} mins </p>
                                    <p className="movie__item__genres"> {selectedMovie.genres?.length >= 1 ? getGenreNames(selectedMovie.genres) : ""}  </p>   
                                </div>
                                {/* <p class="ticket__current-price">$28.00</p>
                                <p class="ticket__old-price">$44.99</p> */}

                                {/* <div className="movie__item-details__3">
                                    <p className="movie__description"> {movie.overview}  </p>
                                    <button class="movie__watch-btn">Watch Now</button>
                                </div> */}

                            </div>
                        {/* </div> */}
                    </div>
                    <div className="movie__item-details__3">
                        <p className="movie__description"> {movie.overview}  </p>
                        <button class="movie__watch-btn">Watch Now</button>
                    </div>


                    {/* </div> */}

                    <div className="movie__social">
                    
                    </div>
                </li>
     

        </>
        : ""

    );
}

export default Movie