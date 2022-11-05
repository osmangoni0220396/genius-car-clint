import React from "react";
import AboutUS from "../AboutUs/AboutUS";
import BestProducts from "../BestProducts/BestProducts";
import Contact from "../Contact/Contact";
import OurServices from "../OurServices/OurServices";
import OurTeam from "../OurTeam/OurTeam";
import Sliders from "../Slider/Sliders";

const Home = () => {
  
  return (
    <div>
      <Sliders></Sliders>
      <AboutUS></AboutUS>
      <OurServices></OurServices>
      <Contact></Contact>
      <BestProducts></BestProducts>
      <OurTeam></OurTeam>
    </div>
  );
};

export default Home;
