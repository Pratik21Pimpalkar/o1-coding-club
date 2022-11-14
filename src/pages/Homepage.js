import React from "react";
import Hero from "../components/Hero";
import CompanySlider from "../components/CompanySlider";
import OurEvents from "../components/OurEvents";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import Testimonial2 from "../components/Testimonial2";
import FeaturesCard from "../components/FeaturesCard";
import NavbarMain from "../components/NavbarMain";
import FooterNew from "../components_template/components/Footer/FooterNew";
import PagesData from "./PagesData"
import OnGoingEvents from "../components/OnGoingEvents"


const Homepage = () => {
  return (
    <div>
      <NavbarMain />
        <Hero />
        <FeaturesCard  data={PagesData.homepage} />
        <Stats data={PagesData.homepage}/>
        {/* <OurEvents /> */}
        < OnGoingEvents  data={PagesData.homepage}/>
        <CompanySlider />
        <Testimonial2 />
        <FooterNew name={PagesData.homepage}/>
        {/* <Footer />   */}

    </div>
  );
};

export default Homepage;
