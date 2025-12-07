import React, { useEffect, useState } from 'react'
import { Route,  Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Logo from './pages/Logo'
import Order from './pages/Order'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import WhatsApp from './components/WhatsApp'
import './App.css'
import Map from './components/Map'

const App = () => {
  
  return (
    <> 
    <div className='root-container'>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='contact' element={<Contact />} />
        <Route path='/logo' element={<Logo />} />
        <Route path='/order' element={<Order />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/services' element={<Services />} />
        <Route path='/map'element ={<Map/>}/>
      </Routes>
      <Footer/>
      <WhatsApp/>
      </div>
    </>
  )
}

export default App