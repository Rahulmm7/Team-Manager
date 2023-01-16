import "../Components/style/Contents.scss"
import { Container, Row, Col } from 'react-grid-system';

const Contents = () => {
    return (


        <div className="main-container">
            <div className="top-row ">
                <div className="col-6 leagues ">Leagues</div>
                <div className="col-3 teams">Teams</div>
                <div className="col-3 players">Players</div>
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