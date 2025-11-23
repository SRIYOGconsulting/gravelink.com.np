import React from 'react'
import './Navbar.css'
import { SocialIcon } from 'react-social-icons'
import Hamburger from 'hamburger-react'

const Navbar = () => {
  return (
    <div className='container'>
      <div>
        <img src="../../public/logo.png" alt="logo" className='logo-img' />
      </div>
      <div>
        <h2 className='logo-text'>Gravure Link</h2>
        <p>Nepal's Fiirst Modern Technology</p>
      </div>
      <div>CALL us:+977-9852068210</div>
      <div>
        <SocialIcon url='https://facebook.com'/>
      </div>
      <div><Hamburger/></div>
    </div>
  )
}

export default Navbar
