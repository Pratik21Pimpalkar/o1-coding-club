import React from "react";
import Testislider from "../components/Testimonial_slider/TestiSlider";
import Home from "../components/Home/Home";
import FooterNew from "../components/Footer/FooterNew";
import Combo from "../components/Combo";

const Homepage = (data) => {
  return (
    <>
    console.log(data);
   
      <div //Background Code
          style={{
            backgroundColor: "#0b001a",
            scrollBehavior: "smooth",
          userSelect: "none",
        }}
      >
        <Home />
        <Testislider />
        <Combo/>
        <FooterNew/>

      </div>
    </>
  );
};

export default Homepage;
