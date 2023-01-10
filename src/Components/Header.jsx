import './style/Header.css'
import { Link } from 'react-router-dom'


const Header = () => {
    return < header >

        <nav className="navbar navbar-expand   ">
            <a className="navbar-brand text-light" href="#">False<span>9</span></a>
            <div id="navbarSupportedContent">
                <ul className="navbar-nav ">
                    <li className="nav-item ">
                        <Link to="/Landingpage"><a className="nav-link" href="#">Home </a> </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Leagues"><a className="nav-link " href="#">Leagues</a> </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/teams"><a className="nav-link " href="#">Teams</a> </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Favourites"><a className="nav-link " href="#">Favourites</a> </Link>
                    </li>
                </ul>
            </div>
        </nav>

    </header >

}

export default Header