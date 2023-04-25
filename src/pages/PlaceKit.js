import React from "react";
import FooterNew from "../components_template/components/Footer/FooterNew";
import Testimonial from "../components/Testimonial2";
import CompanySlider from "../components/CompanySlider";
import Stats from "../components/Stats";
import TimelineForPlacekit from "../components/TimelineForPlaceKit";
import FeaturesCard from "../components/FeaturesCard";
import PagesData from "./PagesData";
import YouWillGet from "../components_template/components/YouWillGet";
import ApplyNowBtn from "../components/ApplyNowBtn";
import Navbar from "../components/Navbar";
import YoutubeVideo from "../components/YoutubeVideo";
import PlaceKitPricing from "../components/PlaceKitPricing";
import AlternativePaymentMethod from "./AlternativePayment";
import Banner from "../components/Banner";
import AboutInstructor from "../components/AboutInstructor";
import Pricing from "../components/Pricing";
import MainContent from "../components_template/components/TextContent/MainContent";
import ReferralSlider from "../components/ReferralSlider";

const PlaceKit = () => {
  const programdata = PagesData.placekit;
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
        <ReferralSlider />
        <YoutubeVideo />
        <FeaturesCard data={programdata} />
        <AboutInstructor data={programdata} />
        <Banner />
        <Pricing data={programdata} />
        <PlaceKitPricing data={programdata} />
        <ApplyNowBtn data={programdata} />

        {programdata.showyouwillget ? (
          <YouWillGet data={programdata} />
        ) : (
          <div></div>
        )}

        {programdata.showtimeline ? (
          <TimelineForPlacekit data={programdata} />
        ) : (
          <div></div>
        )}

        <AlternativePaymentMethod data={programdata} />
        <CompanySlider />
        <Testimonial />
        <FooterNew name={programdata} />
      </div>
    </>
  );
};

export default PlaceKit;
