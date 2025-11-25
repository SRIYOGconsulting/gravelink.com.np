import React from 'react'
import './About.css'

const About = () => {
  return (
    <>
    <div className='container'>
      <div>
        <h1 className='header' >ABOUT US</h1>
        <h1>We Are The Leader In The Gravure Printing</h1>
        <p>Gravure Link Nepal Pvt. Ltd. A leader in the printing sector and producing Rotogravure Electronic Printing Cylinders of the highest caliber. We serve many renowned companies around the country by offering specialized, precised, long-lasting, and artistically exceptional printing cylinders.</p>

      </div>
      <div>
        <div className='square'>
            <p>16</p>
            <h3>Years Experience</h3>
            <br />
        </div>
        <div>
          <img src="/about-home.jpg" alt="" height={"720px"} width={"100%"} />
        </div>
      </div>
    </div>
    </>
  )
}

export default About
