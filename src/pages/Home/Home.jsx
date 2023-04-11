
import axios from 'axios';
import { useEffect, useState } from 'react';

import "../Home/Home.scss"
import Header
 from '../../components/Header/Header';
import FeaturedMovies from '../../components/FeaturedMovies/FeaturedMovies';
import NewMovies from '../../components/NewMovies/NewMovies';

const Home = () => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const [featuredMovies, setFeaturedMovies] = useState([])
    const [series, setSeries] = useState([])

    console.log(apiKey)

    const getSeries = () => {
        const url = ``
        axios
        .get(url)
    }

    function getMovieGenre () {
        axios
        // .get(`https://api.themoviedb.org/3/movie/550?api_key=3802e225b1fcc1ed8f104f47d3bdbef8`)
        .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
        .then((response) => {
            // console.log(response.data)
        })
        .catch(err => {
            console.log(`Error in retrieving movie ${err}`)
        })
    }

    function getFeaturedMovies () {
        axios
        // .get(`https://api.themoviedb.org/3/movie/550?api_key=3802e225b1fcc1ed8f104f47d3bdbef8`)
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1&adult=false`)
        
        .then((response) => {
            // console.log(response.data)
        })
        .catch(err => {
            console.log(`Error in retrieving movie ${err}`)
        })
    }

    useEffect(() => {
        getMovieGenre();
    }, [])

    useEffect(() => {
        getFeaturedMovies();
    }, [])

    return (

        <>
          <Header />
          <FeaturedMovies featured={featuredMovies}/>
          <NewMovies />
        </>

    );
}

export default Home;