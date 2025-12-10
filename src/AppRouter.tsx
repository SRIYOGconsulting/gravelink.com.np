import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Home from './pages/Home';
import Contact from './pages/Contact';
import Logo from './pages/Logo';
import Order from './pages/Order';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsApp from './components/WhatsApp';
import Map from './components/Map';

const AppRouter: React.FC = () => {
  return (
      <div className='root-container'>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/logo' element={<Logo />} />
          <Route path='/order' element={<Order />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/services' element={<Services />} />
          <Route path='/map' element={<Map />} />
        </Routes>
        <Footer />
        <WhatsApp /> 
      </div>
    
  );
};

export default AppRouter;