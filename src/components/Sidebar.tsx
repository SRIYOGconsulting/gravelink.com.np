import React from 'react'
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom';

interface Props {
  open: boolean;
  setOpen: any;
}

const Sidebar = ({ open, setOpen }: Props) => {
  return (
    <div className={`sidebar-container ${open ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-section-sidebar">
                    <img src="/favicon/logo.png" alt="logo" className="logo-img-sidebar" />
                    <div className="logo-texts">
                        <h2 className="logo-text">Gravure Link</h2>
                        <p className="logo-sub">Nepal's First Modern Technology</p>
                    </div>
                </div>
        <div className="hamburger">
          <Hamburger toggled={open} toggle={setOpen} size={22} />
        </div>
      </div>

      <div className="sidebar-links">
        <Link to="/" onClick={() => setOpen(false)}> <button className='sidebar-btn'>Home </button></Link>
        <Link to="/about" onClick={() => setOpen(false)}><button className='sidebar-btn'>About Us</button></Link>
        <Link to="/services" onClick={() => setOpen(false)}><button className='sidebar-btn'>Services</button></Link>
        <Link to="/order" onClick={() => setOpen(false)}><button className='sidebar-btn'>Order</button></Link>
        <Link to="/portfolio" onClick={() => setOpen(false)}><button className='sidebar-btn'>Portfolio</button></Link>
        <Link to="/logo" onClick={() => setOpen(false)}><button className='sidebar-btn'>Logo</button></Link>
        <Link to="/contact" onClick={() => setOpen(false)}><button className='sidebar-btn'>Contact</button></Link>
      </div>

      <div className='sidebar-footer'>
        <p>© Gravure Link Nepal Pvt. Ltd. </p>
        <p> 2026 All Rights Reserved</p>
        <p className='tech-partner'><Link to={"#"} className='technology-partner-sidebar'>Technology Partner | Sriyog Consulting</Link> </p>
      </div>
    </div>
  )
}

export default Sidebar;
