import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='container'>
      <div>
        <a href=""><h2>Home</h2></a>
        <a href=""><h2>About us</h2></a>
        <a href=""><h2>Services</h2></a>
        <a href=""><h2>Order</h2></a>
        <a href=""><h2>Portfolio</h2></a>
        <a href=""><h2>logo</h2></a>
        <a href=""><h2>Contact</h2></a>
      </div>
      <div className='sidebar-footer'>
         <p>
            © Gravure Link Nepal Pvt. Ltd. 2025. All Rights Reserved
         </p>
         <p className='tech-partner'>Technology Partner| PRACAS</p>
      </div>
    </div>
  )
}

export default Sidebar
