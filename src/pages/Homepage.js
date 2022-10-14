import React from "react";
import Hero from "../components/Hero";
import CompanySlider from "../components/CompanySlider";
import OurEvents from "../components/OurEvents";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import Testimonial2 from "../components/Testimonial2";
import FeaturesCard from "../components/FeaturesCard";
import Navbar from "../components/Navbar";
import FooterNew from "../components_template/components/Footer/FooterNew";
import PagesData from "./PagesData"
const Homepage = () => {
  return (
    <div>
  
        <Navbar />
        <Hero />
        <FeaturesCard  data={PagesData.homepage} />
        <Stats data={PagesData.homepage}/>
        <OurEvents />
        <CompanySlider />
        <Testimonial2 />
        <FooterNew/>
        {/* <Footer />   */}

    </div>
  );
};

export default Homepage;
