import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home"
import DisplayRooms from "./components/DisplayRooms";
import Roomselected from "./components/Roomselected";


function App() {
  return (
    <div>
      <Navbar />      
      <Routes>
        {/* <Route path="/" element={<Navbar/>}></Route> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/findrooms/:roomId" element={<DisplayRooms/>}></Route>
        <Route path="/roomselect" element={<Roomselected/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
