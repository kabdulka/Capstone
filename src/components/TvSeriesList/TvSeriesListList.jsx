import TvSeries from "../TvSeries/TvSeries";
import "../TvSeriesList/TvSeriesList.scss"
import uuid from 'react-uuid';


const TvSeriesList = ({shows}) => {

    console.log("Shows are: ")
    console.log(shows)

    return (

        <>
            
            <section className="shows__container">
                <ul className="shows__list">

                    {shows?.map(show => 
                        <TvSeries
                            key={uuid()}
                            show={show}
                        />
                    )}

                </ul>
            </section>

        </>

    );
}

export default TvSeriesList;