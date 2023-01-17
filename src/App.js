import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import Error from "./Pages/Error";
import Favourites from "./Pages/Favourites";
import Contents from "./Pages/Contents";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { useState } from "react";
import Welcome from "./Components/Welcome";

const Wrapper = () => {
  const [menuOpen, SetmenuOpen] = useState(false)

  return <div className="Home ">
    <div className="left-section">
      <Header menuOpen={menuOpen} menuChange={SetmenuOpen} />
    </div>

    {
      menuOpen ?
        <div className="right-section"><Contents /></div>
        :
        <div className="right-section"><Outlet></Outlet>  </div>
    }
  </div>
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Wrapper />}>
            <Route exact path="/home" element={<Welcome />} />

            <Route exact path="/Landingpage" element={<LandingPage />} />
            <Route exact path="/Favourites" element={<Favourites />} />
            <Route path="*" element={<Error />} />
            <Route exact path="/Home" element={<Home />} />

          </Route>
          <Route path="*" element={<Error />} />


          {/*
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Landingpage" element={<LandingPage />} />
          <Route exact path="/Contents" element={<Contents />} />
          <Route exact path="/Favourites" element={<Favourites />} />
          <Route path="*" element={<Error />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
