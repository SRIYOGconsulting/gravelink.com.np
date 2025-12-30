import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import ServicesWeOffer from '../components/ServicesWeOffer'
import Testimonials from '../components/Testimonials'


const Home = () => {
  return (
    <>
      <div className='home'>
        <Hero />
        <About />
        <ServicesWeOffer />
        <Testimonials />
      </div>
    </>
  )
}

export default Home