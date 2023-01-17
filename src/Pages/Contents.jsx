import { Link } from "react-router-dom"
import Header from "../Components/Header"
import "../Components/style/Contents.scss"

const Contents = () => {
    return (



        <div className="main-container">
            <div className="top-row ">
                <Link to={"/Leagues"} className="col-md-6 col-sm-12 leagues text-decoration-none">Leagues</Link>
                <div className="col-md-3 col-sm-12 teams">Teams</div>
                <div className="col-md-3 col-sm-12 players">Players</div>
            </div>
            <div className="bottom-row">
                <div className="col-6 bottom-left-sec">
                    <div className=" fantasy">Fantasy</div>
                    <div className=" formation">Formation</div>
                </div>
                <div className="col-6 favourites">Favourites</div>
            </div>
        </div>

    )
}

export default Contents