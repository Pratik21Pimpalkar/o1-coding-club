import React from "react";
import FooterNew from "../components_template/components/Footer/FooterNew";
import Testimonial from "../components/Testimonial2";
import CompanySlider from "../components/CompanySlider";
import Stats from "../components/Stats";
import TimelineFor1000x from "../components/TimelineFor1000x";
import FeaturesCard from "../components/FeaturesCard";
// import AboutProgram from "../components_template/components/Features/Feature";
import PagesData from "./PagesData";
import YouWillGet from "../components_template/components/YouWillGet";
// import Eligibility from "../components_template/components/Eligiblity";
import ApplyNowBtn from "../components/ApplyNowBtn";
import Navbar from "../components/Navbar";
import YoutubeVideo from "../components/YoutubeVideo";
import Pricing from "../components/Pricing";
import AboutInstructor from "../components/AboutInstructor";
import MainContent from "../components_template/components/TextContent/MainContent";
const ThousandX = () => {
  const programdata = PagesData.ThousandX;
  return (
    <>
      <div //Background Code
        style={{
          backgroundColor: "#0b001a",
          scrollBehavior: "smooth",
          userSelect: "none",
        }}
      >
        <Navbar />
        <MainContent name={programdata} />
        <Stats data={programdata} />
        <YoutubeVideo />
        <FeaturesCard data={programdata} />
        {/* <AboutProgram data={programdata} /> */}
        <AboutInstructor data={programdata} />
        <Pricing data={programdata} />
        <ApplyNowBtn data={programdata} />
        {/* <Eligibility  data={programdata}/> */}
        {programdata.showyouwillget ?
          <YouWillGet data={programdata} />
          : <div></div>}
        {programdata.showtimeline ?
          <TimelineFor1000x data={programdata} />
          : <div></div>}
        <CompanySlider />
        <Testimonial />
        <FooterNew name={programdata} />
      </div>
    </>
  );
};

export default ThousandX;

