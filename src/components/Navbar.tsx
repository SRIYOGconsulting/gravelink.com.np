import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import Hamburger from 'hamburger-react'
import Sidebar from './Sidebar'
import { NavLink } from "react-router-dom";
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
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    <NavLink to="/services" className="nav-link">Services</NavLink>
                    <NavLink to="/order" className="nav-link">Order</NavLink>
                    <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
                    <NavLink to="/logo" className="nav-link">Logo</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
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
