import './style/Header.scss'
import { Link } from 'react-router-dom'


const Header = ({ menuOpen = false, menuChange = () => { } }) => {

    return < header >
        <nav className="navigation-panel">
            <div className='row'>
                <Link to={"/Home"}><i class="bi bi-house-fill"></i></Link>
            </div>
            <div className='row'>
                <i class="bi bi-list" onClick={() => menuChange(!menuOpen)}></i>
            </div>
            <div className='row'>
                <Link to={"/About"}><i class="bi bi-envelope-fill"></i></Link>
            </div>
        </nav>

    </header >
}

export default Header