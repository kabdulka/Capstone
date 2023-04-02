import { Link } from 'react-router-dom';
import "../Header/Header.scss";

const Header = () => {

    return (

        <>
            <header className="header__nav">
                <nav className="nav">
                    <ul className="nav__list">
                    <li className="nav__item"> <Link className="nav__item-link" to="/"> Movies </Link> </li> 
                    <li className="nav__item"> <Link className="nav__item-link" to="/"> TV </Link> </li> 
                    <li className="nav__item"> <Link className="nav__item-link" to="/"> Watch List </Link> </li> 
                    <li className="nav__item"> <Link className="nav__item-link" to="/"> Recommendations </Link> </li>                     </ul>
                </nav>
            </header>
        </>

    );
}

export default Header;