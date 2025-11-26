import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import ServicesWeOffer from '../components/ServicesWeOffer'
import Testmonials from '../components/Testmonials'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <About />
      <ServicesWeOffer />
      <Testmonials />
    </div>
  )
}

export default Home
