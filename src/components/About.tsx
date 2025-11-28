import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about-container'>
  <div className="about-text-container">
    <h2 className='header-text'>About Us</h2>
    <h1>We Are The Leader In The Gravure Printing</h1>
    <p className='about-text'>
      Gravure Link Nepal Pvt. Ltd. A leader in the printing sector...
    </p>

    <div className='experience'>
      <h1 className='square'>16</h1>
      <div className='working-experience'>
        <h3>Years <br />Experience <br />Working</h3>
      </div>
    </div>
  </div>

  <div className='about-img'>
    <img src="/about-home.jpg" alt="About Gravure Link" />
  </div>
</div>
  )
}

export default About
