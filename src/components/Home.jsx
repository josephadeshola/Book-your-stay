import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Service from "./Service";
import Info from "./Info";
import Faq from "./Faq";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel/>
      <Service/>
      <Info/>
      <Faq/>
    </div>
  );
};

export default Home;
