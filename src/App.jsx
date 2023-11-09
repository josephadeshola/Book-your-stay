import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <div>  
      <Routes>
        <Route path="/" element={ <Home/>}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
