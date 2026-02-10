import { Routes, Route, Link } from "react-router";
import Home from "./components/Home";
import About from "./components/About/About";
import Destination from "./components/Destination/Destination";
import Car from "./components/Car/Car";
import Hobby from "./components/Hobby/Hobby";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/destination">Destination</Link>
        <Link to="/car">Car</Link>
        <Link to="/hobby">Hobby</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Car" element={<Car />} />
        <Route path="/Hobby" element={<Hobby />} />
      </Routes>
    </>
  );
}

export default App;
