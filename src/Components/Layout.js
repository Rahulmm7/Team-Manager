
import { Outlet } from "react-router"
import Header from "./Header"

const Layout = () => {

    return <div className="Home ">
        <div className="left-section">
            <Header />
        </div>
        <div className="right-section"><Outlet /></div>
    </div>
}

export default Layout