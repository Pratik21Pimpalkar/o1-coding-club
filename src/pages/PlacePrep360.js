import React from "react";
import FooterNew from "../components_template/components/Footer/FooterNew";
import Testimonial from "../components/Testimonial2";
import CompanySlider from "../components/CompanySlider";
import Stats from "../components/Stats";
import Timeline from "../components/TimelineForSde";
import FeaturesCard from "../components/FeaturesCard";
import PagesData from "./PagesData";
import YouWillGet from "../components_template/components/YouWillGet";
import ApplyNowBtn from "../components/ApplyNowBtn";
import Navbar from "../components/Navbar";
import YoutubeVideo from "../components/YoutubeVideo";
import AboutInstructor from "../components/AboutInstructor";
import Pricing from "../components/Pricing";
import PlaceKitPricing from "../components/PlaceKitPricing";
import AlternativePaymentMethod from "./AlternativePayment";
import Offers from "../components/Offers";
import MainContent from "../components_template/components/TextContent/MainContent";
import ReferralSlider from "../components/ReferralSlider";
import { Container, Typography } from "@mui/material";
import p1 from "../Assets/events/sde_bcamp_schedule.jpeg";
import AllOffers from "../components/AllOffers";

const Super50 = () => {
  const programdata = PagesData.PlacePrep360;
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
        {/* <Offers /> */}

        {/* <AllOffers /> */}

        <Container maxWidth="md" sx={{ marginTop: "3rem" }}>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              color: "white",
              fontSize: "2.5rem",
              margin: "2rem 0",
              fontFamily: "Roboto,Helvetica,Arial,sans-serif",
            }}
          >
            SDE Bootcamp Schedule
          </Typography>
          <img src={p1} alt="" style={{ width: "100%", marginTop: "1rem" }} />
        </Container>

        <Pricing data={programdata} />
        <PlaceKitPricing data={programdata} />
        <ApplyNowBtn data={programdata} />

        {programdata.showyouwillget ? (
          <YouWillGet data={programdata} />
        ) : (
          <div></div>
        )}
        {programdata.showtimeline ? (
          <Timeline data={programdata} />
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

export default Super50;
