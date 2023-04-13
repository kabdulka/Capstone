
import { Link } from "react-router-dom";
import "../Movie/Movie.scss"
import { useState, useEffect } from "react";
import axios from "axios";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg"

export function getGenreNames(genres) {
    let result = "";
    genres.forEach((genre) => {
        result += genre.name + ", "
    })
    
    return result.substring(0, result.length-2);
}

const Movie = ({movie, isLiked, handleMovieDelete}) => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const [selectedMovie, setSelectedMovie] = useState({})

    const backgroundImgStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${selectedMovie.backdrop_path})`,
        backgroundSize: "cover",
        // background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(https://image.tmdb.org/t/p/w500/${selectedMovie.backdrop_path})`,
        opacity: "0.7",
        backgroundRepeat: "no-repeat"
    };


    const getGenreNames = (genres) => {
        let result = "";
        genres.forEach((genre) => {
            result += genre.name + ", "
        })
        
        return result.substring(0, result.length-2);
    }

  

    const getMovieInfo = () => {

        const url = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&language=en-US&adult=false`;
        axios
        .get(url)
        .then((response => {

            setSelectedMovie(response.data)
        }))
        .catch(err => {
            console.log(`could not find movie ${err}`);
        }) 
    }


    useEffect(() => {
        getMovieInfo();
    }, [])

    const handleDelete = () => {
        console.log(selectedMovie.id)
        console.log("click")
        const url = `http://localhost:5050/movies/${selectedMovie.id}`;
        axios
        .delete(url)
        .then((response)=>{
            handleMovieDelete(selectedMovie.id)
        })
        .catch(err => {
            console.log(`Could not delete movie ${err}`)
        })

    }

    // console.log("movie liked", isLiked)

    return (

        selectedMovie.id?  

        <>
                <li className="movie__item" >
                  
                   
                    <div className="movie__item-main" >
                        <div className="movie__item-poster">
                            <Link to={`/${selectedMovie.id}`}>
                                <img className="movie__item-poster__image" src={"https://image.tmdb.org/t/p/w500/"+selectedMovie.poster_path} />
                            </Link>
                        </div>
                            <div className="movie__item-details">
                                <div className="movie__item-details__1">
                                    <h3 className="movie__item__title"> {selectedMovie.title.length >= 15 ? movie.title.substring(0,15) + "...": movie.title} </h3>
                                    <p className="movie__item__date"> {selectedMovie.release_date} </p>
                                </div>
                               
                                <div className="movie__item-details__2">
                                    <p className="movie__item__runtime"> {selectedMovie.runtime} mins </p>
                                    <p className="movie__item__genres"> {getGenreNames(selectedMovie.genres).length >= 20 ? getGenreNames(selectedMovie.genres).substring(0,20) + "..." : getGenreNames(selectedMovie.genres)}  </p>   
                                </div>

                            </div>

                    </div>
                    <div className="movie__item-details__3">
                        <p className="movie__item__description"> {selectedMovie.overview.length > 80 ? selectedMovie.overview.substring(0,80) + "..." + "(click for more)" : selectedMovie.overview}  </p>
                        <Link to={`/${selectedMovie.id}`}>

                        <button class="movie__item__watch-btn">Learn more</button>
                        </Link>
                    </div>

                    <div className={`${isLiked ? "movie__item__remove--active" : "movie__item__remove--inactive"}`}>
                        <img onClick={handleDelete} className={`${isLiked ? "movie__item__remove-icon" : "movie__item__remove-icon--inactive"}`} src={deleteIcon} />
                    </div>

                    <div >
                    </div>

                </li>
        </>
        : ""

    );
}

export default Movie