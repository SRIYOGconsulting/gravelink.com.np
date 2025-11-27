import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
     <div className='footer'>
                <div>
                    <img src="/logo.png" alt="" className='logo-img' />
                    <h3 className='footer-gravure-link'>Gravure Link</h3>
                    <p>Nepal's First Modern Technology</p>
                </div>
                <div className='footer-right'>
                    © Gravure Link Nepal Pvt. Ltd. 2017
                    <br />
                    All Rights Reserved
                    <br />
                    <a href="">Technology Partner |PRACAS</a>
                    
                </div>
                <div className='footer-middle'>
                    <a href="#">Site Map</a><br />
                    <a href="./about">About Us</a><br />
                    <a href="./services">Services</a><br />
                    <a href="/contact">Contact</a><br />

                </div>
                <div className='footer-end'>
                    <a href="./portfolio">Portfolio</a> <br />
                    <a href="./order">Order</a>
                </div>
            </div>
  )
}

export default Footer
