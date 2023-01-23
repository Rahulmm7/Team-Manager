import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./Pages/Error";
import Favourites from "./Pages/Favourites";
import Contents from "./Pages/Contents";
import Home from "./Pages/Home";
import Layout from "./Components/Layout";
import Mail from "./Components/Mail";
// import Employees from "./Components/Employees";
import Leagues from "./Pages/Leagues";
import Teams from "./Pages/Teams";
import Fantasy from "./Pages/Fantasy";
import Formation from "./Pages/Formation";
// import PlayerCard from "./Components/PlayerCard";
import Players from "./Pages/Players";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Contents" element={<Contents />} />
            <Route path='/Leagues' element={<Leagues />} />
            <Route path="/Teams" element={<Teams />} />
            <Route path="/Fantasy" element={<Fantasy />} />
            <Route path="Formation" element={<Formation />} />
            <Route path="/Players" element={<Players />} />
            <Route path="/Favourites" element={<Favourites />} />
            <Route path="/Mail" element={<Mail />} />
            <Route path="*" element={<Error />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
