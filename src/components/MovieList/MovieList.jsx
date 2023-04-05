import Movie from "../Movie/Movie";
import "../MovieList/MovieList.scss";
import uuid from 'react-uuid';

const MovieList = ({movies}) => {

    console.log("movies are: ")
    console.log(movies)

    return (

        <>
            <section className="movies__container">
                <ul className="movies__list">

                    {movies?.map(movie => 
                        <Movie
                            key={uuid()}
                            movie={movie}
                        />
                    )}

                </ul>
            </section>

            {/* <div class="main-container">
			<div class="poster-container">
				<a href="#"><img src="https://i.ibb.co/ThPNnzM/blade-runner.jpg" class="poster" /></a>
			</div>
			<div class="movie__item">
				<div class="ticket__content">
					<h4 class="ticket__movie-title">Blade Runner 2049</h4>
					<p class="ticket__movie-slogan">
						More human than human is our motto.
					</p>
					<p class="ticket__current-price">$28.00</p>
					<p class="ticket__old-price">$44.99</p>
					<button class="ticket__buy-btn">Buy now</button>
				</div>
			</div>
		</div> */}


        </>

    );
}

export default MovieList;