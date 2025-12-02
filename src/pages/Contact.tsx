import React from 'react'
import './Contact.css'
import GoogleMapComponent from '../components/GoogleMapComponent'
import Map from '../components/Map'

const Contact = () => {
  return (
    <div className='contact-container'>
      <h1 style={{fontSize:"30px"}}>Let's have a coffee</h1>

      <Map/>

      <div>
        <div className='biratnagar-container'>
          <div>
            <h3 className='location'>BIRATNAGAR</h3>
          </div>
          <div>
            <h2>Biratnagar, <span>Nepal</span></h2>
            <p>Milan Chowk, Niratnagar-19 ,Nepal</p>
            <p><span>email</span>: brt@gravelink.com.np</p>
            <p><span>WhatsApp</span>: 9802024996</p>
          </div>
          <div>
            <p>call directly</p>
            <h2>+977-9852024996  +977-9802024996  +977-9852027921</h2>
          </div>

          <div>
            <span>Work hours</span>
            <p>Sunday- Friday: 10:00am - 18:00pm</p>
            <p>Satuarday off work</p>
          </div>
        </div>
        <div>
          <h2 className='location ktm'>KATHMANDU</h2>
          <h2>Kathmandu,Nepal</h2>
          <p>Sundhara, China-Tower,Nepal</p>
          <p> <span> Email</span>: ktm@gravelink.com.np</p>
          <p> <span>WhatsApp</span>:9801038868</p>

          <span>Call directly</span>
          <h2>+977-9851038868 <br />
            +977-9801038868
          </h2>
          <p><span>Work Hours</span> <br />
            Sunday- Friday : 10:00am - 17:00pm
            <br />
            Saturday off work
          </p>
        </div>

      </div>
    </div>
  )
}

export default Contact
