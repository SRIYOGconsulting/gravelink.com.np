import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-section left">
       
        <img src="/logo.png" style={{height:"45px",width:"100px"}} alt="" />
        <h3 className="footer-title">Gravure Link</h3>
        <p>Nepal's First Modern Technology</p>
      </div>

      
      <div className="footer-section middle">
        <p>© Gravure Link Nepal Pvt. Ltd. 2025</p>
        <p>All Rights Reserved</p>
        <a className="technology-partner" href="#">
          Technology Partner | PRACAS
        </a>
      </div>
      <div className="footer-section mid-right">
        <a href="/map">Site Map</a>
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>

      <div className="footer-section right">
        <a href="/portfolio">Portfolio</a>
        <a href="/order">Order</a>
      </div>

    </footer>
  )
}

export default Footer