import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import Hamburger from 'hamburger-react'
import Sidebar from './Sidebar'
import './Navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="navbar-container">

                    <div className="logo-section">
                        <img src="/favicon/logo.png" alt="logo" className="logo-img" />
                        <div className="logo-texts">
                            <h2 className="logo-text">Gravure Link</h2>
                            <p className="logo-sub">Nepal's First Modern Technology</p>
                        </div>
                    </div>

                    <div className="middle-section">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/services">Services</a>
                        <a href="/order">Order</a>
                        <a href="/portfolio">Portfolio</a>
                        <a href="/logo">Logo</a>
                        <a href="/contact">Contact</a>
                    </div>

                    <div className="right-section">
    
                        <div className="hamburger">
                            <Hamburger toggled={open} toggle={setOpen} size={22} />
                        </div>
                    </div>

                </div>

            <Sidebar open={open} setOpen={() => setOpen(!open)} />
        </>
    )
}

export default Navbar
