import './Header.scss'
import { Link } from 'react-router-dom'


const Header = () => {

    return < header >
        <nav className="navigation-panel">
            <div className='row'>
                <Link to={"/Home"}><i class="bi bi-house-fill"></i></Link>
            </div>
            <div className='row'>
                <Link to={'/Contents'}>
                    <i class="bi bi-list" ></i>
                </Link>
            </div>
            <div className='row'>
                <Link to={"/Mail"}><i class="bi bi-envelope-fill"></i></Link>
            </div>
        </nav>

    </header >
}

export default Header