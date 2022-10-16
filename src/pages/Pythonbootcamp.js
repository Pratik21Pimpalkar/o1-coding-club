import React from "react";
import Home from "../components_template/components/Home/Home";
import FooterNew from "../components_template/components/Footer/FooterNew";
import Testimonial from "../components/Testimonial2";
import CompanySlider from "../components/CompanySlider";
import Stats from "../components/Stats";
import Timeline from "../components/Timeline";
import FeaturesCard from "../components/FeaturesCard";
import AboutProgram from "../components_template/components/Features/Feature";
import PagesData from "./PagesData";
import YouWillGet from "../components_template/components/YouWillGet";
const Pythonbootcamp = () => {
  const programdata = PagesData.pythonbootcamp;
  return (
    <>
      <div //Background Code
        style={{
          backgroundColor: "#0b001a",
          scrollBehavior: "smooth",
          userSelect: "none",
        }}
      >
        <Home name={programdata} />
        <Stats data={programdata} />
        <FeaturesCard data={programdata} />
        <AboutProgram data={programdata} />
        <YouWillGet data={programdata}/>
        <Timeline />
        <CompanySlider />
        <Testimonial />
        <FooterNew name={programdata} />
      </div>
    </>
  );
};

export default Pythonbootcamp;
