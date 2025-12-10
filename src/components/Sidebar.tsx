import React from 'react'
import Hamburger from 'hamburger-react'
import './Sidebar.css'
import { Link } from 'react-router-dom';

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Sidebar = ({ open, setOpen }: Props) => {
  return (
    <div className={`sidebar-container ${open ? 'open' : ''}`}>
      <div className="sidebar-header">
        <Hamburger toggled={open} toggle={setOpen} size={22} />
      </div>

      <div className="sidebar-links">
        <Link to="/" onClick={() => setOpen(false)}><h2>Home</h2></Link>
        <Link to="/about" onClick={() => setOpen(false)}><h2>About us</h2></Link>
        <Link to="/services" onClick={() => setOpen(false)}><h2>Services</h2></Link>
        <Link to="/order" onClick={() => setOpen(false)}><h2>Order</h2></Link>
        <Link to="/portfolio" onClick={() => setOpen(false)}><h2>Portfolio</h2></Link>
        <Link to="/logo" onClick={() => setOpen(false)}><h2>Logo</h2></Link>
        <Link to="/contact" onClick={() => setOpen(false)}><h2>Contact</h2></Link>
      </div>

      <div className='sidebar-footer'>
        <p>© Gravure Link Nepal Pvt. Ltd. 2025. All Rights Reserved</p>
        <p className='tech-partner'>Technology Partner | Sriyog Consulting</p>
      </div>
    </div>
  )
}

export default Sidebar;
