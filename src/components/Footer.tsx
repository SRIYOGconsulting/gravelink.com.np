import React from 'react'

const Footer = () => {
  return (
     <div className='footer'>
                <div>
                    <img src="/logo.png" alt="" className='logo-img' />
                    <h3>Gravure Link</h3>
                    <p>Nepal's First Modern Technology</p>
                </div>
                <div>
                    © Gravure Link Nepal Pvt. Ltd. 2017
                    <br />
                    All Rights Reserved
                    <br />
                    Technology Partner |PRACAS
                </div>
                <div className='middle'>
                    <a href="#">Site Map</a><br />
                    <a href="./about">About Us</a><br />
                    <a href="./services">Services</a><br />
                    <a href="/contact">Contact</a><br />

                </div>
                <div>
                    <a href="./portfolio">Portfolio</a> <br />
                    <a href="./order">Order</a>
                </div>
            </div>
  )
}

export default Footer
