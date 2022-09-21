import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = () => {
  const path = require.context("../../public/companies_logo", false, /\.png$/);
  return path.keys();
};

const CompanySlider = () => {
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1300,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,

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
          slidesToShow: 2,
        },
      },
    ],
  };

  const changefilename = (fname) => {
    const path = "./companies_logo/" + fname.substring(2);
    return path;
  };
  const name = images();
  const fnames = name.map(changefilename);
  console.log(fnames);

  return (
    <CompanySlider_main>
      <h1>Companies</h1>
      <Slider {...settings}>
        {/* {fnames.map(fname)} */}
        {fnames.map((fname) => (
          <div>
            <img src={fname} alt="" height={100} />{" "}
          </div>
        ))}

        {/* <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>6</h3>
        </div> */}
      </Slider>
    </CompanySlider_main>
  );
};

const CompanySlider_main = styled.div`
  color: white;
  h1{
      text-align: center;
      font-family: 'Muli';  
  }
`;

export default CompanySlider;
