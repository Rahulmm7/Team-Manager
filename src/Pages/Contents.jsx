import { Link } from "react-router-dom"
import "./Contents.scss"

const Contents = () => {
    return (

        <div className="main-container">
            <div className="top-row text-decoration-none ">
                <Link to={"/Leagues"} className="col-md-6 col-sm-12 leagues ">Leagues</Link>
                <Link to={"/Teams"} className="col-md-3 col-sm-12 teams">Teams</Link>
                <Link to={"/Players"} className="col-md-3 col-sm-12 players">Players</Link>

            </div>
            <div className="bottom-row">
                <div className="col-6 bottom-left-sec">
                    <Link to={"/Fantasy"} className="fantasy">Fantasy</Link>
                    <Link to={"/Formation"} className="formation">Formation</Link>
                </div>
                <Link to={"/Favourites"} className="col-6 favourites">Favourites</Link>

            </div>
        </div>

    )
}

export default Contents