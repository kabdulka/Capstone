import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../SelectedMovie/SelectedMovie.scss"
import axios from "axios";


const SelectedMovie = () => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const urlParams = useParams();
    const [selectedMovie, setSelectedMovie] = useState({});

    const getMovie = () => {
        
        const url = `https://api.themoviedb.org/3/movie/${urlParams.movieId}?api_key=${apiKey}&language=en-US`;

        axios
        .get(url)
        .then(response => {
            console.log(response.data)
            setSelectedMovie(response.data)
        })
        .catch(err => {
            console.log(`error in fiding movie using id ${err}`)
        })
    }

   useEffect(() => {
    getMovie()
   }, [])

    return (

        <>
            <section className="selected-movie"> 

                <h1 className="selected__movie__title"> {selectedMovie.title} </h1>

            </section>
        </>


    );
}

export default SelectedMovie;