import "../TvSeries/TvSeries.scss"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const TvSeries = ({show}) => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const [selectedShow, setSelectedShow] = useState({})

    const backgroundImgStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${selectedShow.backdrop_path})`,
        backgroundSize: "cover",
        // background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(https://image.tmdb.org/t/p/w500/${selectedShow.backdrop_path})`,
        opacity: "0.7",
        backgroundRepeat: "no-repeat"
    };


    const getGenreNames = (genres) => {
        let result = "";
        genres.forEach((genre) => {
            result += genre.name + ", "
        })
        
        return result.substring(0, result.length-2);
    }

    const getSeriesInfo = () => {
        console.log(show.id)
        console.log(apiKey)
        const url = `https://api.themoviedb.org/3/tv/${show.id}?api_key=${apiKey}&language=en-US`
        console.log(url)
      
        axios
        .get(url)
        .then((response => {
            // console.log(response.data);
            // console.log(response.data.genres);
            setSelectedShow(response.data)
        }))
        .catch(err => {
            console.log(`could not find movie ${err}`);
        }) 
    }


    useEffect(() => {
        getSeriesInfo();
    }, [])

    return (

        selectedShow.id?  
        <>
            {/* <li className="tv-series">

            </li> */}
            <li className="show__item" >
                  
                  {/* <div className="show__item-background" style={backgroundImgStyle}> */}
                 
                  <div className="show__item-main" >
                  {/* <img src={show.poster_path} /> */}
                      <div className="show__item-poster">
                          <Link to={`/${selectedShow.id}`}>
                              <img className="show__item-poster__image" src={"https://image.tmdb.org/t/p/w500/"+selectedShow.poster_path} />
                          </Link>
                      </div>
                      {/* <div className="show__item-info"> */}
                          <div className="show__item-details">
                              <div className="show__item-details__1">
                                  <h3 className="show__item__title"> {show.name.length >= 15 ? show.name.substring(0,15) + "...": show.name} </h3>
                                  <p className="show__item__date"> {show.release_date} </p>
                              </div>
                             
                              <div className="show__item-details__2">
                                  <p className="show__item__runtime"> {selectedShow.runtime} mins </p>
                                  <p className="show__item__genres"> {getGenreNames(selectedShow.genres).length >= 20 ? getGenreNames(selectedShow.genres).substring(0,20) + "..." : getGenreNames(selectedShow.genres)}  </p>   
                              </div>
                             

                          </div>
                      {/* </div> */}
                  </div>
                  <div className="show__item-details__3">
                      <p className="show__item__description"> {show.overview.length > 100 ? show.overview.substring(0,100) + "..." : show.overview}  </p>
                      <button class="show__item__watch-btn">Watch Now</button>
                  </div>


                  {/* </div> */}

                  <div className="show__social">
                  
                  </div>
                  
              </li>
   

      </>

            : ""



    );
}

export default TvSeries;