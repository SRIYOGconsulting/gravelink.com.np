import React from 'react'
import './Home.css'
import Services from './Services'
import Hero from '../components/Hero'
import ServicesWeOffer from '../components/ServicesWeOffer'
import Testmonials from '../components/Testmonials'
import About from '../components/About'

const Home = () => {
  return (
    <div className='home'>   
    <Hero/>
    <About />
    <ServicesWeOffer/>
    <Testmonials/>
    </div>
  )
}

export default Home
