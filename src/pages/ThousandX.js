import React from "react";
import Home1000x from "../components_template/components/Home/Home1000x";
import FooterNew from "../components_template/components/Footer/FooterNew";
import Testimonial from "../components/Testimonial2";
import CompanySlider from "../components/CompanySlider";
import Stats from "../components/Stats";
import Timeline from "../components/Timeline";
import TimelineFor1000x from "../components/TimelineFor1000x";
import FeaturesCard from "../components/FeaturesCard";
import AboutProgram from "../components_template/components/Features/Feature";
import PagesData from "./PagesData";
import YouWillGet from "../components_template/components/YouWillGet";
import Eligibility from "../components_template/components/Eligiblity";
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
        <Home1000x name={programdata} />
        <Stats data={programdata} />
        <FeaturesCard data={programdata} />
        <AboutProgram data={programdata} />
        {/* <Eligibility  data={programdata}/> */}
        {programdata.showyouwillget?
        <YouWillGet data={programdata}/>
        :<div></div>}
        {programdata.showtimeline?
        <TimelineFor1000x  data={programdata}/>
        :<div></div>}
        <CompanySlider />
        <Testimonial />
        <FooterNew name={programdata} />
      </div>
    </>
  );
};

export default ThousandX;

// https://drive.google.com/thumbnail?id=1HYlkYNE0zhMo908KOo06pfun3Rp2esLW
// https://drive.google.com/thumbnail?id=1JWNuP2qLLq2g2IdggbX4_ZjyrQva2f0G
// https://drive.google.com/thumbnail?id=1grmxrzueVBiriqQrhli1Ej9dqPgDfquf
// https://drive.google.com/thumbnail?id=1zXGr6t9JEi8mmyzIH1TSXddwjlCRStJP

// https://drive.google.com/thumbnail?id=1HYlkYNE0zhMo908KOo06pfun3Rp2esLW