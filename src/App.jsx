import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import DisplayRooms from "./components/DisplayRooms";
import Roomselected from "./components/Roomselected";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import Loadingpage from "./components/Loadingpage";
import FoodOrd from "./components/FoodOrd";
import ForgotPassword from "./components/ForgotPassword";
function App() {
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={2}
        theme="light"
      />

      {isloading ? (
        <Loadingpage />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/findrooms/:roomId" element={<DisplayRooms />}></Route>
            <Route path="/roomselect" element={<Roomselected />}></Route>
            <Route path="/create" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/forgot/password" element={<ForgotPassword />}></Route>
            <Route path="/food/order" element={<FoodOrd />}></Route>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </>
      )} 
    </div>
  );
}

export default App;
