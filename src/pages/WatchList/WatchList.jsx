
import axios from "axios";
import { useState, useEffect } from "react";
import "../WatchList/WatchList.scss"
import MovieList from "../../components/MovieList/MovieList";
import arrowLeft from "../../assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";


const WatchList = () => {

    const [likedMovies, setLikedMovies] = useState([])

    const getLikedMovies = () => {

        const url = `http://localhost:5050/movies`;

        axios
        .get(url)
        .then(response => {
            console.log(response.data)
            setLikedMovies(response.data)
        })
        .catch(err => {
            console.log(`couldn't retrieve liked movies ${err}`)
        })

    }

    const handleMovieDelete = (id) => {
        console.log(id)
        setLikedMovies(prev => {
            return prev.filter(movie => 
                movie.id !== id
            )
        })
    }

    useEffect(() => {
        getLikedMovies()
    }, [])

    return (

        <>
            <section className="watchlist">
                <Link className="watchlist__back-link" to="/">
                    <img className="watchlist__back" src={arrowLeft}/>

                </Link>
                <MovieList 
                    isLiked={true} 
                    movies={likedMovies}
                    handleMovieDelete={handleMovieDelete}
                />
            </section>
        </>

    );

}

export default WatchList;