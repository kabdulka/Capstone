
import "../Search/Search.scss";
import { useState, useEffect } from "react";
import arrowLeft from "../../assets/Icons/arrow_back-24px.svg";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";
import { Link } from "react-router-dom";
import Checkbox from "../../components/Checkbox/Checkbox";
import TvSeriesList from "../../components/TvSeriesList/TvSeriesListList";

const Search = () => {

    const [searchInput, setSearchInput] = useState("");
    const [moviesResult, setMoviesResult] = useState([]);
    const [seriesResult, setSeriesResult] = useState([]);

    const [isRecent, setIsRecent] = useState(false);
    // const [isRecent, setIsRecent] = useState(false);

    const apiKey = process.env.REACT_APP_API_KEY;

    const handleSibmit = (event) => {
        event.preventDefault();
        alert("form submitted");
    }

    const handleInputChange = (event) => {
     
        setSearchInput(event.target.value)
        console.log(searchInput)
    }

    const getDate = (movie) => {
    
        const dateQuery = parseInt(movie.substring(0,4))
        console.log(dateQuery)
        
        // const date = isRecent ? 
    }

    const parseInput = (input) => input.split(" ").join("+")

    const getSearchData = () => {
        const modifiedInput = parseInput(searchInput)
        let endPoints = [
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${modifiedInput}&page=1&include_&adult=false&`,
            `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=1&query=${modifiedInput}&include_adult=false`,
            // `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${modifiedInput}&page=2&include_&adult=false&`,
            // `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=2&query=${modifiedInput}&include_adult=false`,
        ];
        console.log("hererere")
        Promise.all(endPoints.map((endpoint) => 
            axios.get(endpoint))).then(([{data: movies}, {data: series}] )=> {
                console.log(series.results)
                setSeriesResult(series.results)
                setMoviesResult(movies.results)
        });

    }
    

    useEffect(() => {
        // getMovie();
        getSearchData();
    }, [searchInput])

    const handleCheckBoxChange = (event) => {

        const {value, name} = event.target;

        if (name === "recent") {
            setIsRecent(!isRecent)
        }
        console.log(`Checked`);

    }

    return (

        <>
            <section className="movie__search">

                <form id="form" className="movie__search__form" onSubmit={handleSibmit} >

                    <div className="movie__search__form-container">

                        <Link className="movie__search-back" to="/">
                            <img  src={arrowLeft} />
                        </Link>

                        {/* <div className="movie__search__form-container"> */}

                            <input 
                                className="movie__search__form-input" 
                                value={searchInput}
                                onChange={handleInputChange}
                                placeholder="Search for a movie"
                            />

                        {/* </div> */}
                    </div>


                    <Checkbox
                        className=""
                        value={isRecent}
                        onChange={handleCheckBoxChange}
                        id="recent"
                        label = "Recent movies (within the past 10 years"
                        name="recent"
                    />

                    
                </form>


                {/* <h2 className="movie__search__related-title"> Related Movies/Shows </h2> */}

                <MovieList movies={moviesResult} />
                <TvSeriesList shows={seriesResult}/>

            </section>

            

        </>

    );

}

export default Search;