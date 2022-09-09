import React from 'react'
import Slider from "react-slick";
import './CompanySlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CompanySlider = () => {
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      const settings={
     dots: true,
        infinite:true,
        speed:1300,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true,
   
dots:false,
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 520,
          settings: {
            slidesToShow: 2
          }
        }]
      
      }
    
  return (
    <div className='slider'>
        <Slider {...settings}>
            <div>
        <h3>1</h3>
          </div>
          <div>
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
          </div>
        </Slider>
    </div>
  )
}

export default CompanySlider