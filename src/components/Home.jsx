
import Navbar from "./Navbar";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Carousel from "./Carousel";
import Service from "./Service";
import Info from "./Info";
import Faq from "./Faq";
import Footer from "./Footer";

const Home = () => {
  

  return (
    
    <div>
      <Navbar />
      <Carousel/>
      <Service/>
      <Info/>
      <Faq/>
      <Footer/>
    </div>
  );
};

export default Home;
