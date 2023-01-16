import './style/Header.scss'
import { Link } from 'react-router-dom'


const Header = () => {
    return < header >

        <nav className="navigation-panel">
            <div className='row'>
                <Link to={"/"}><i class="bi bi-house-fill home"></i></Link>
            </div>
            <div className='row'>
                <Link to={"/Contents"}><i class="bi bi-list ham"></i></Link>
            </div>
            <div className='row'>
                <Link to={"/About"}><i class="bi bi-envelope-fill mail"></i></Link>
            </div>
        </nav>

    </header >

}

export default Header