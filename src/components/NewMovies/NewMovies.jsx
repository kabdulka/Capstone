import axios from "axios";
import "../NewMovies/NewMovies.scss"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const NewMovies = () => {


    const apiKey = process.env.REACT_APP_API_KEY;

    const [newReleases, setNewReleases] = useState([]);


    const getNewReleases = () => {
        const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`

        axios
        .get(url)
        .then((response) => {
            console.log(response.data.results)
            setNewReleases(response.data.results)
        })
        .catch(err => {
            console.log(`Could not fnd new releases ${err}`)
        })
    }

    useEffect(() => {
        getNewReleases()
    }, [])

    return (

        <>

            <section className="new-movies">
                <h2 className="new-movies__title"> New Releases </h2>

                <div className="new-movies__container">
                    <ul className="new-movies__list">

                        {
                            newReleases?.map((movie => 
                                // <li> 
                                <Link className="movie__container-link" to={`/${movie.id}`} >
                                    <li className="movie__container__movie-item">
                                        <img className="movie__container-image" src={"https://image.tmdb.org/t/p/w500/"+movie?.poster_path} />
                                    </li>
                                </Link>
                                // </li>    
                            ))
                        }
                        
                    </ul>
                </div>
            </section>
        
        </>

    );
}

export default NewMovies;