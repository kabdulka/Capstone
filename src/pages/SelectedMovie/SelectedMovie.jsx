import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../SelectedMovie/SelectedMovie.scss"
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FaHeart } from "react-icons/fa";
import MovieList from "../../components/MovieList/MovieList";
import arrowLeft from "../../assets/Icons/arrow_back-24px.svg";
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from "../../utils/ChangingProgressProvider";
// import ChangingProgressProvider from "./ChangingProgressProvider";

import {
    CircularProgressbar,
    
  } from "react-circular-progressbar";
import Search from "../Search/Search";

const SelectedMovie = () => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const urlParams = useParams();
    const [selectedMovie, setSelectedMovie] = useState({});
    const [movieLiked, setMovieLiked] = useState(false);
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [populatiry, setPopulatiry] = useState(0);

    const getMovie = () => {
        
        const url = `https://api.themoviedb.org/3/movie/${urlParams.movieId}?api_key=${apiKey}&language=en-US`;

        axios
        .get(url)
        .then(response => {
            // console.log(response.data)
            setPopulatiry(response.data.vote_average)
            setSelectedMovie(response.data)
        })
        .catch(err => {
            console.log(`error in fiding movie using id ${err}`)
        })
    }

    const backgroundImgStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${selectedMovie.backdrop_path})`,
        backgroundSize: "cover",
        // background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(https://image.tmdb.org/t/p/w500/${selectedMovie.backdrop_path})`,
        opacity: "0.7",
        backgroundRepeat: "no-repeat"
    };

    const getRecommendedMovies = () => {
        const url = `https://api.themoviedb.org/3/movie/${urlParams.movieId}/recommendations?api_key=${apiKey}&language=en-US&page=1`;
        axios
        .get(url)
        .then(response => {
            // console.log("recommended")
            // console.log(response.data.results)
            setRecommendedMovies(response.data.results)
        })
        .catch(err => {
            console.log(`Could not find recommended movies ${err}`)
        })
    }

   useEffect(() => {
    getMovie()
    getRecommendedMovies()
   }, [urlParams.movieId])

   const handleClick = () => {
    
        console.log("click")
        setMovieLiked(!movieLiked)

        axios
        .get(`http://localhost:5050/movies`)
        .then((response) => {
            console.log(response)
        })
        .catch(err => {
            console.log(`error in finding liked movies ${err}`)
        })
        
   }


    return (

        urlParams.movieId ?

        <>
            {/* <div style={{ width: 200, height: 200 }}>
                <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />;
            </div> */}

            {/* <Search></Search> */}
            
            <section className="selected__movie"> 

            <Link className="selected__movie-link" to="/">
                <img className="selected__movie-link__logo" src={arrowLeft} />
            </Link>
                
            {/* </div> */}


            <div className="selected__movie__wrapper">
          
                <h1 className="selected__movie__title"> {selectedMovie.title} </h1>
           
                <div className="selected__movie__image-container" style={backgroundImgStyle}>
                    {/* <img className="selected__movie__image" src={"https://image.tmdb.org/t/p/w500/"+selectedMovie.poster_path} /> */}

                </div>

                <p className="selected__movie__overview"> {selectedMovie.overview}  </p>
                {/* <p className="selected__movie__overview"> {selectedMovie.} </p> */}
                <div className="selected__movie-">

                </div>
                <div className="selected__movie__rating" style={{ width: 150, height: 150 }}>
                    <h3 className="selected__movie__rating-value"> rating: </h3>
                    <ChangingProgressProvider values={[0,Math.floor(populatiry*10)]}>
                    {percentage => (
                        <CircularProgressbar value={percentage} text={`${percentage ? percentage + "%" : ""}`} />
                    )}
                    
                    </ChangingProgressProvider>
                </div>
                <FaHeart 
                    className= {`selected__movie__like ${movieLiked ? "selected__movie__like--liked" : ""}`}
                    onClick={handleClick}
                /> 
            </div>

                {/* <FontAwesomeIcon icon="fa-duotone fa-heart" /> */}
              

            </section>

            <section className="similar__movies">
                <h2 className="similar__movies__title"> Related movies </h2>
                <MovieList movies={recommendedMovies}/>
            </section>
     
        </>

        : ""
    );
}

export default SelectedMovie;