import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Carousel />
      <Service /> */}
      {/* <Info/> */}
      
      <Routes>
        <Route path="/" element={<Navbar/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
