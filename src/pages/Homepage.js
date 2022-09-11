import React from 'react'
import Hero from '../components/Hero'
import CompanySlider from '../components/CompanySlider'
import wave from "../Assets/wave1.svg"
import OurEvents from '../components/OurEvents'
import Testimonial from '../components/Testimonial'
const Homepage = () => {
  return (
    <div>
      <Hero />
      {/* <CompanySlider/> */}
      <OurEvents/>
      <Testimonial/>
    </div>
  )
}

export default Homepage