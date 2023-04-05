import axios from "axios";
import "../NewMovies/NewMovies.scss"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const NewMovies = () => {


    const apiKey = process.env.REACT_APP_API_KEY;

    const [newReleases, setNewReleases] = useState([]);

    const getNewReleases2 = async (pages) => {

        const allResults = [];

        for (let i = 1; i<=pages; i++) {
            const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=${i}`
			try {
				const response = await axios.get(url);
				const pageResults = response.data.results;
				allResults.push(...pageResults);
          
			} catch (error) {
				console.error(`Error fetching data for page ${i}: ${error}`);
			}
        }
        setNewReleases(allResults);
  
    }
  


    const getNewMovies = (pages) => {

        const allResults = [];
       
        for (let i = 1; i<=pages; i++) {
            const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=${i}`

            axios
                .get(url)
                .then((response) => {
                    console.log(response.data.results)
                    const pageResults = response.data.results;
                    allResults.push(...pageResults)
                    
                })
                .catch(err => {
                    console.log(`Could not fnd new releases ${err}`)
                })
        }
        setNewReleases(allResults)
    }

    const getNewReleases = (pages) => {
        const allResults = [];
       
        for (let i = 1; i<=pages; i++) {
            const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=${i}`
            // returns a promise
            const pageResult = axios.get(url);
            
            console.log("page results")
            console.log(pageResult)
            allResults.push(pageResult)
        }
        console.log("All results")
        console.log(allResults)
        Promise.all(allResults).then((values) => {
            console.log("values")
            console.log(values);
            const results = [];
            values.forEach((value) => {
                // setNewReleases(...value.data.results)
                results.push(...value.data.results)
            })
            setNewReleases(results)
            
          });
    }


    useEffect(() => {
      
        getNewReleases(3)
        // getNewMovies(3)
        // getNewMovies2(4)
       
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
                                <Link key={movie.id} className="movie__container-link" to={`/${movie.id}`} >
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





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_KEY = 'your_api_key_here'; // Replace with your own API key
// const BASE_URL = 'https://api.themoviedb.org/3';
// const NEW_RELEASES_ENDPOINT = '/movie/now_playing';

// const numPages = 4;
// const resultsPerPage = 20;

// function MyComponent() {
// 	const [results, setResults] = useState([]);

// 	useEffect(() => {
// 		const fetchResults = async () => {
// 			const allResults = [];

// 			for (let i = 1; i <= numPages; i++) {
// 				const url = `${BASE_URL}${NEW_RELEASES_ENDPOINT}?api_key=${API_KEY}&page=${i}`;

// 				try {
// 					const response = await axios.get(url);
// 					const pageResults = response.data.results;
// 					allResults.push(...pageResults);
          
// 				} catch (error) {
// 					console.error(`Error fetching data for page ${i}: ${error}`);
// 				}
// 			}
// 			setResults(allResults);
// 		};
// 		fetchResults();
// 	}, []);
// }