import Header from "../Components/Header"
import "../Components/style/Home.scss"
import Contents from "./Contents"

const Home = () => {
    return (

        <div className="Home ">

            <div className="left-section">
                <Header />
            </div>
            <div className="right-section"><Contents /></div>
        </div>
    )
}

export default Home