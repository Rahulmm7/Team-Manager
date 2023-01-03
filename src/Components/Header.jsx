import './style/Header.css'


const Header = () => {
    return < header >

        <nav className="navbar navbar-expand   ">
            <a className="navbar-brand text-light" href="#">Team Manager</a>
            <div id="navbarSupportedContent">
                <ul className="navbar-nav ">
                    <li className="nav-item ">
                        <a className="nav-link" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Teams</a>
                    </li>
                </ul>
            </div>
        </nav>

    </header >

}

export default Header