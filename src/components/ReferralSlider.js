import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@mui/material";


const CompanySlider = () => {
  const images = () => {
    const path = require.context("../../public/referrals_logo", false, /\.png$/);
    return path.keys();
  };
  
  const settings = {
    speed: 5500,
    autoplay: true,
    infinite: true,
    autoplaySpeed:0,
    slidesToShow: 6,
    cssEase: 'linear',
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const changefilename = (fname) => {
    const path = "./referrals_logo/" + fname.substring(2);
    return path;
  };
  const name = images();
  const fnames = name.map(changefilename);
  return (
    <CompanySlider_main>

      <Typography variant="h3" sx={{
        margin: "3rem 0",
        textAlign: "center", color: "white", fontSize: "3.0rem", fontWeight: "bold",
        '@media (max-width:480px)': {
          fontSize: '1.8rem',
        }
      }}>We provide referrals at</Typography>
      <Slider {...settings}>
        {/* {fnames.map(fname)} */}
        {fnames.map((fname) => (
          <div key={fname} style={{ width: '2rem' }}>
            <img src={fname} style={{ objectFit: "contained", width: '100%' }} alt="" />
          </div>
        ))}
      </Slider>
    </CompanySlider_main>
  );
};

const CompanySlider_main = styled.div`
  h1 {
    text-align: center;
    font-family: "Muli";
    color: white;
    font-weight: bold;
    margin: 3rem 0;
    font-size: 3rem;
  }
  .slick-slide {
    
  &:focus, a {
    outline: none;
  }
}
.slick-slide div {transition-timing-function: linear!important;
    outline: none;
}


  @media screen and (max-width: 576px) {
    h1 {
    
    font-size: 2rem;
  }
  } 
   
`;

export default CompanySlider;
