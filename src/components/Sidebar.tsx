import React from 'react'
import Hamburger from 'hamburger-react'
import './Sidebar.css'

interface Props {
  open: boolean;
  setOpen: () => void;
}

const Sidebar = ({ open, setOpen }: Props) => {
  return (
    <div className={`sidebar-container ${open ? 'open' : ''}`}>

      {/* Same hamburger used as CROSS (close) */}
      <div className="sidebar-header">
        <Hamburger toggled={open} toggle={setOpen} size={22} />
      </div>

      <div className="sidebar-links">
        <a href="./"><h2>Home</h2></a>
        <a href="./about"><h2>About us</h2></a>
        <a href="./services"><h2>Services</h2></a>
        <a href="./order"><h2>Order</h2></a>
        <a href="./portfolio"><h2>Portfolio</h2></a>
        <a href="./logo"><h2>Logo</h2></a>
        <a href="./contact"><h2>Contact</h2></a>
      </div>

      <div className='sidebar-footer'>
        <p>© Gravure Link Nepal Pvt. Ltd. 2025. All Rights Reserved</p>
        <p className='tech-partner'>Technology Partner | PRACAS</p>
      </div>
    </div>
  )
}

export default Sidebar
