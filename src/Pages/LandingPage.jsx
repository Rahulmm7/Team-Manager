import Employees from "../Components/Employees";
import Footer from "../Components/Footer";
import Header from "../Components/Header";


const LandingPage = () => {
    return (
        <div>
            <Header text="Logo" />
            <Employees />
            <Footer />
        </div>
    );
}

export default LandingPage;
