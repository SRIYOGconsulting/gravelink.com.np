import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import About from '../components/About'
import Services from './Services'
import Hero from '../components/Hero'
import ServicesWeOffer from '../components/ServicesWeOffer'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>   
        <Sidebar/>
       
        <ServicesWeOffer/>
        <Services/>
    </div>
  )
}

export default Home
