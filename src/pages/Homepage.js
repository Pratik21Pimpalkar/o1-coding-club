import React from 'react'
import Hero from '../components/Hero'
import CompanySlider from '../components/CompanySlider'
import wave from "../Assets/wave1.svg"
import OurEvents from '../components/OurEvents'
import Testimonial from '../components/Testimonial'
import Stats from '../components/Stats'
import Footer from '../components/Footer'
const Homepage = () => {
  return (
    <div>
      <Hero />
      <OurEvents/>
      <CompanySlider/>
      <Stats/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Homepage