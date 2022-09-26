import React from 'react'
import Hero from '../components/Hero'
import CompanySlider from '../components/CompanySlider'
import OurEvents from '../components/OurEvents'
import Testimonial from '../components/Testimonial'
import Stats from '../components/Stats'
import Footer from '../components/Footer'
import Testimonial2 from '../components/Testimonial2'
import FeaturesCard from '../components/FeaturesCard'
import Navbar from '../components/Navbar'
const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <FeaturesCard/>
      <Stats/>
      <OurEvents/>
      <CompanySlider/>
      <Testimonial2/>
      {/* <Testimonial/> */}
      <Footer/>
    </div>
  )
}

export default Homepage