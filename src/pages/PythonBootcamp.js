import React from "react";
import Home from "../components_template/components/Home/Home";
import FooterNew from "../components_template/components/Footer/FooterNew";
import Testimonial from "../components/Testimonial2";
import CompanySlider from "../components/CompanySlider";
import Stats from "../components/Stats";
import Timeline from "../components/Timeline";
import FeaturesCard from "../components/FeaturesCard";
import AboutProgram from "../components_template/components/Features/Feature";
import PagesData from "./PagesData"
const Pythonbootcamp = () => {
    
  return (
    <>
      <div //Background Code
        style={{
          backgroundColor: "#0b001a",
          scrollBehavior: "smooth",
          userSelect: "none",
        }}
      >
        <Home name={"Pythonbootcamp"} />
        <Stats />
        <FeaturesCard />
        {/* <Events /> */}
        <AboutProgram data={PagesData.Pythonbootcamp} />
        <Timeline />
        <CompanySlider />
        <Testimonial />
        <FooterNew name={"Pythonbootcamp"} />
      </div>
    </>
  );
};

export default Pythonbootcamp;
