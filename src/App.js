import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

import TeamPage from "./pages/TeamPage";
import Footer from "./components/Footer";
import { useState } from "react";
import Events from "./components/events/Events";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
   

   
      <BrowserRouter>
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <Routes>
          <Route exact path="/" element={<HomePage isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}></Route>
          <Route exact path="/events" element={<Events isMenuOpen={isMenuOpen} />}></Route>
          <Route exact path="/team" element={<TeamPage isMenuOpen={isMenuOpen} />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
