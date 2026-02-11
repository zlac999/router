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
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/destination">destination</Link>
        <Link to="/car">car</Link>
        <Link to="/hobby">hobby</Link>
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
