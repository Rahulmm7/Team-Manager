import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./Pages/SignUp";
import LandingPage from "./Pages/LandingPage";
import Error from "./Pages/Error";
import Favourites from "./Pages/Favourites";
import Contents from "./Pages/Contents";
import Home from "./Pages/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Landingpage" element={<LandingPage />} />
          <Route exact path="/Contents" element={<Contents />} />
          <Route exact path="/Favourites" element={<Favourites />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
