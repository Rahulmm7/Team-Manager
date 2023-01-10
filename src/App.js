import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./Pages/SignUp";
import LandingPage from "./Pages/LandingPage";
import Error from "./Pages/Error";
import Favourites from "./Pages/Favourites";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/Landingpage" element={<LandingPage />} />
          <Route exact path="/Favourites" element={<Favourites />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
