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
                        <img src="/logo.png" alt="logo" className="logo-img" />
                        <div className="logo-texts">
                            <h2 className="logo-text">Gravure Link</h2>
                            <p className="logo-sub">Nepal's First Modern Technology</p>
                        </div>
                    </div>

                    <div className="call-wrapper">
                        <span>CALL US:</span>
                        <span>+977-9852068210</span>
                    </div>

                    <div className="right-section">
                        <div className="social-icon">
                            <SocialIcon url="https://facebook.com" style={{ width: 28, height: 28 }} />
                        </div>
                        <div className="separator"></div>

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
