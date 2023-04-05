
import "../Search/Search.scss";
import { useState, useEffect } from "react";
import arrowLeft from "../../assets/Icons/arrow_back-24px.svg";
import axios from "axios";
import MovieList from "../../components/MovieList/MovieList";
import { Link } from "react-router-dom";
import Checkbox from "../../components/Checkbox/Checkbox";

const Search = () => {

    const [searchInput, setSearchInput] = useState("");
    const [moviesResult, setMoviesResult] = useState([]);

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
    
    const getMovie = () => {

        // setSearchInput(parseInput(searchInput));
        const modifiedInput = parseInput(searchInput)
        getDate("2004:32")
        console.log(searchInput)
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${modifiedInput}&page=1&include_&adult=false&`;
        console.log(url)
        axios
        .get(url)
        .then((response) => {
            console.log(response.data.results)
            setMoviesResult(response.data.results)
        })
        .catch((err) => {
            console.log(`Could not find the requested movie ${err}`)
        })
    
    }

    useEffect(() => {
        getMovie();
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
            {/* <h1>hello</h1> */}
            <form id="form" className="form" onSubmit={handleSibmit} >

                <div className="form__search">

                    <Link className="form__back" to="/">
                        <img  src={arrowLeft} />
                    </Link>

                    <input 
                        className="form__search-movie" 
                        value={searchInput}
                        onChange={handleInputChange}
                        placeholder="Search for a movie"
                    />
                </div>


                <Checkbox
                    value={isRecent}
                    onChange={handleCheckBoxChange}
                    id="recent"
                    label = "Recent movies (within the past 10 years"
                    name="recent"
                />

                
            

            </form>

            <MovieList movies={moviesResult} />
            

        </>

    );

}

export default Search;