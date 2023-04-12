import { Link } from 'react-router-dom';
import "../Header/Header.scss";
import searchIcon from "../../assets/Icons/search-24px.svg";

const Header = () => {

    return (

        <>
            <header className="header__nav">
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item"> <Link className="nav__item-link" to="/"> Movies </Link> </li> 
                        <li className="nav__item"> <Link className="nav__item-link" to="/"> TV </Link> </li> 
                        <li className="nav__item"> <Link className="nav__item-link" to="/likedmovies"> Watch List </Link> </li> 
                        <li className="nav__item"> <Link className="nav__item-link" to="/"> Recommendations </Link> </li>                     
                        <li className="nav__item"> <Link className="nav__item-link" to="/search"> <img src={searchIcon}/> </Link> </li>
                    </ul>
                </nav>
            </header>
        </>

    );
}

export default Header;