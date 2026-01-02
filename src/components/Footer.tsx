import React from 'react'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-section-footer footer-section">
        <img src="/favicon/logo.png" alt="logo" className="logo-img-footer" />
        <div className="logo-texts">
          <h2 className="logo-text">Gravure Link</h2>
          <p className="logo-sub">Nepal's First Modern Technology</p>
        </div>
      </div>

      <div className="footer-section middle">
        <p>© Gravure Link Nepal Pvt. Ltd. 2026</p>
        <p>All Rights Reserved</p>
        <Link className="technology-partner" to="#">
          Technology Partner | Sriyog Consulting
        </Link>
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
