import React from 'react'

const About = () => {
  return (
    <div>
      <h2 className='header-text'>
        About Us
      </h2>

      <h1>We Are The Leader In The Gravure Printing </h1>
      <p className='about-text'>Gravure Link Nepal Pvt. Ltd. A leader in the printing sector and producing Rotogravure Electronic Printing Cylinders of the highest caliber. We serve many renowned companies around the country by offering specialized, precised, long-lasting, and artistically exceptional printing cylinders.</p>

      <div className='experience'>
        <h1 className='square'>
           16
        </h1>
        <div className='working-experience'>
          <h3>Years <br />Experience 
          <br />Working</h3>
        </div>
      </div>

       <div>
          <img src="/about-home.jpg" alt="" className='img' />
        </div>
    </div>
  )
}

export default About
