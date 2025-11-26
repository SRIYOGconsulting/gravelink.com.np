import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
      <h1>Let's have a coffee</h1>

      {/* //todo :map */}
      <div>
        <h3 className='location'>BIRATNAGAR</h3>
        <h2>Biratnagar, <span>Nepal</span></h2>
        <p>Milan Chowk, Niratnagar-19 ,Nepal</p>
        <p><span>email</span>: brt@gravelink.com.np</p>
        <p><span>WhatsApp</span>: 9802024996</p>

        <div>
          <p>call directly</p>
          <h2>+977-9852024996  +977-9802024996  +977-9852027921</h2>
        </div>

        <div>
          <span>Work hours</span>
          <p>Sunday- Friday: 10:00am - 18:00pm</p>
          <p>Satuarday off work</p>
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
