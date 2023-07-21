import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import EventsPage from "./pages/EventsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/events" element={<EventsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
