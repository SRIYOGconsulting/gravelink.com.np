import React from 'react';
import Map from '../components/Map'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="coffee">
        <h1>Let's have a coffee.</h1>
      </div>
      <Map />

      <div className='branch-container'>
        <div className='branch-section'>
          <div className='location-header'>
            <div className='location-line'></div>
            <h3 className='location-name'>BIRATNAGAR</h3>
          </div>

          <div className='info-grid'>
            <div className='address-details'>
              <h2 className='city-name'>Biratnagar, <span className='country-name'>Nepal</span></h2>
              <p className='address-line'>Milan Chowk, Biratnagar-19, Nepal</p>

              <p>
                <span className='info-label'>Email</span>: brt@gravelink.com.np
              </p>
              <p>
                <span className='info-label'>WhatsApp</span>: 9802024996
              </p>
            </div>

            <div className='contact-details'>
              <p className='contact-label'>Call directly:</p>
              <h2 className='phone-number'>+977-9852024996</h2>
              <h2 className='phone-number'>+977-9802024996</h2>
              <h2 className='phone-number'>+977-9852027921</h2>
            </div>
          </div>

          <div className='work-hours'>
            <p className='work-hours-label'>Work Hours</p>
            <p className='work-time'>Sunday - Friday: 10:00am - 18:00pm</p>
            <p className='work-time gray-text'>Saturday off work</p>
          </div>
        </div>

        <div className='branch-section'>
          <div className='location-header'>
            <div className='location-line ktm-line'></div>
            <h3 className='location-name ktm-name'>KATHMANDU</h3>
          </div>

          <div className='info-grid'>
            <div className='address-details'>
              <h2 className='city-name'>Kathmandu, <span className='country-name'>Nepal</span></h2>
              <p className='address-line'>Sundhara, China-Town, Nepal</p>

              <p>
                <span className='info-label'>Email</span>: ktm@gravelink.com.np
              </p>
              <p>
                <span className='info-label'>WhatsApp</span>: 9801038868
              </p>
            </div>

            <div className='contact-details'>
              <p className='contact-label'>Call directly:</p>
              <h2 className='phone-number'>+977-9851038868</h2>
              <h2 className='phone-number'>+977-9801038868</h2>
            </div>
          </div>

          <div className='work-hours'>
            <p className='work-hours-label'>Work Hours</p>
            <p className='work-time'>Sunday - Friday: 10:00am - 17:00pm</p>
            <p className='work-time gray-text'>Saturday off work</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;