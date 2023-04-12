
import axios from "axios";
import { useState, useEffect } from "react";
import "../WatchList/WatchList.scss"
import MovieList from "../../components/MovieList/MovieList";

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

    useEffect(() => {
        getLikedMovies()
    }, [])

    return (

        <>
            <MovieList movies={likedMovies}/>
        </>

    );

}

export default WatchList;