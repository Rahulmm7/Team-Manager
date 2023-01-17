import "../Components/style/Home.scss"
import Header from "../Components/Header"
import Contents from "./Contents"
import Welcome from "../Components/Welcome"
import { useState } from "react"

const Home = () => {
    const [menuOpen, SetmenuOpen] = useState(false)
    return (
        <div className="right-section"><Welcome /></div>
    )
}

export default Home