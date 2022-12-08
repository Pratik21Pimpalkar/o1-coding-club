import React from "react";
import Home1000x from "../components_template/components/Home/Home1000x";
import FooterNew from "../components_template/components/Footer/FooterNew";
import Testimonial from "../components/Testimonial2";
import CompanySlider from "../components/CompanySlider";
import Stats from "../components/Stats";
import TimelineFor1000x from "../components/TimelineFor1000x";
import TimelineforSuper40 from "../components/TimelineForSuper40";
import Timeline from "../components/Timeline";
import FeaturesCard from "../components/FeaturesCard";
import AboutProgram from "../components_template/components/Features/Feature";
import PagesData from "./PagesData";
import YouWillGet from "../components_template/components/YouWillGet";
// import Eligibility from "../components_template/components/Eligiblity";
import ApplyNowBtn from "../components/ApplyNowBtn";
import Navbar from "../components/Navbar";
import YoutubeVideo from "../components/YoutubeVideo";
const Super50 = () => {
  const programdata = PagesData.Super50;
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
        <Home1000x name={programdata} />
        <YoutubeVideo/>
        <Stats data={programdata} />
        <FeaturesCard data={programdata} />
        <AboutProgram data={programdata} />
        <ApplyNowBtn data={programdata} />
        {/* <Eligibility  data={programdata}/> */}
        {programdata.showyouwillget ? (
          <YouWillGet data={programdata} />
        ) : (
          <div></div>
        )}
        {programdata.showtimeline ? (
          <TimelineforSuper40 data={programdata} />
        ) : (
          // <TimelineFor1000x  data={programdata}/>
          <div></div>
        )}
        <CompanySlider />
        <Testimonial />
        <FooterNew name={programdata} />
      </div>
    </>
  );
};

export default Super50; 
