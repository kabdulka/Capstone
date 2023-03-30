import logo from './logo.svg';
import './App.scss';
import axios from 'axios';
import { useEffect } from 'react';

function App() {

  const apiKey = `3802e225b1fcc1ed8f104f47d3bdbef8`;
  function getMovie () {
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
    getMovie();
  }, [])
  

  return (

   

    <>

    </>

  );
}

export default App;
