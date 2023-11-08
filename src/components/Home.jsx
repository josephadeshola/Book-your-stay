import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Service from "./Service";
import Info from "./Info";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel/>
      <Service/>
      <Info/>
    </div>
  );
};

export default Home;
