
import axios from 'axios';
import { useEffect } from 'react';

import "../Home/Home.scss"



const Home = () => {

    const apiKey = process.env.REACT_APP_API_KEY;

  console.log(apiKey)

  function getMovieGenre () {
    axios
    // .get(`https://api.themoviedb.org/3/movie/550?api_key=3802e225b1fcc1ed8f104f47d3bdbef8`)
    .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
    .then((response) => {
      console.log(response.data)
    })
    .catch(err => {
      console.log(`Error in retrieving movie ${err}`)
    })
  }

  useEffect(() => {
    getMovieGenre();
  }, [])

    return (

        <>

        </>

    );
}

export default Home;