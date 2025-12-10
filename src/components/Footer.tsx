import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-section left">
        <img src="/favicon/logo.png" alt="" className='logo-img' />
        <h3 className="footer-title">Gravure Link</h3>
        <p>Nepal's First Modern Technology</p>
      </div>

      <div className="footer-section middle">
        <p>© Gravure Link Nepal Pvt. Ltd. 2025</p>
        <p>All Rights Reserved</p>
        <a className="technology-partner" href="#">
          Technology Partner | Sriyog Consulting
        </a>
      </div>

      <div className="footer-section mid-right">
        <Link to="/map">Site Map</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="footer-section right">
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/order">Order</Link>
      </div>

    </footer>
  )
}

export default Footer
