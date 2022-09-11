import React from 'react'
import Hero from '../components/Hero'
import CompanySlider from '../components/CompanySlider'

import wave from "../Assets/wave1.svg"
<<<<<<< HEAD
import Stats from '../components/Stats'
import Testimonial from '../components/Testimonial'
const Homepage = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Stats/>
      <Testimonial/>
=======
import OurEvents from '../components/OurEvents'
const Homepage = () => {
  return (
    <div>
      <Hero />
      <CompanySlider/>
      <OurEvents/>
>>>>>>> d61c49811366a2f22811cc3e81c8d2c2532de95b
    </div>
  )
}

export default Homepage