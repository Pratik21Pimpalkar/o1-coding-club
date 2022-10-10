import React from "react";
import Events from "../components/OurEvents"
import Testislider from "../components/Testimonial";
import Home from "../components_template/components/Home/Home";
import FooterNew from "../components_template/components/Footer/FooterNew";
import Testimonial from "../components/Testimonial2";
import CompanySlider from "../components/CompanySlider";
const data = {t:"asdf"};
const DSA = () => {
  return (
    <>
    <div //Background Code
          style={{
            backgroundColor: "#0b001a",
            scrollBehavior: "smooth",
          userSelect: "none",
        }}
      >
            <Home name={'DSA TOPIC'}/>
        <Events />
        {/* <Testislider />  */}
        <CompanySlider/>
        <Testimonial />
        <FooterNew name = {'DSA TOPIC'}/>

      </div>
    </>
  );
};

export default DSA;




 