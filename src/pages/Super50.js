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
const Super50 = () => {
  
  return (
    <>
      <div //Background Code
        style={{
          backgroundColor: "#0b001a",
          scrollBehavior: "smooth",
          userSelect: "none",
        }}
      >
        <Home name={PagesData.Super50} />
        <Stats data={PagesData.Super50}/>
        <FeaturesCard  data={PagesData.Super50}/>
        <AboutProgram data={PagesData.Super50} />
        <Timeline />
        <CompanySlider />
        <Testimonial />
        <FooterNew name={"SUPER50"} />
      </div>
    </>
  );
};

export default Super50;
