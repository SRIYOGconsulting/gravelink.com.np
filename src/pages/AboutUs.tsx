import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <>
    <div className='about-us-container'>
      <div className='img-container'>
        <img src="/about-us.png" alt="" />
      </div>
      <h3 className='brief-about-us'>
        BRIEF
        <br />
        ABOUT
        <br/>
        US.
      </h3>
      <div>
        
        <p> <b>Gravure Link Nepal Pvt. Ltd.</b> A leader in the printing sector and producing Rotogravure Electronic Printing Cylinders of the highest caliber. We serve many renowned companies around the country by offering specialized, precised, long-lasting, and artistically exceptional printing cylinders, ensuring a unique identity for brands. With 16 years of experience, we have established ourselves as market leaders, and our cylinders are among the most on-demand items in the flexi-printing manufacturing industry. With all the engraving facilities under a single roof, we are the largest manufacturer of rotogravure cylinders. We offer the cutting-edge technology.Strategic location, enabling ease of reach and transportation.</p>
        <br />
        <p>Established ourselves as a quality cylinder manufacturer, competing magnificently with electronically engraved cylinders in terms of printing quality under the brand name "Gravure Link Nepal Pvt. Ltd. a renowned company in Nepal, producing the finest quality gravure. To provide the highest quality product, we are proud of our highly skilled and qualified technicians from India who have at least 10-15 years of work experience.</p>
      </div>

      <div>
        <h3 className='what-we-do'>
            What
            <br />
            We
            <br />
            Do
        </h3>
      </div>
      <div>
        
       
        <h2>Dedication</h2>
        <p>A feeling of very strong support for
            or loyalty to someone or something :
            the quality or state of being dedicated
            to a person, group, cause, etc. It took 
            a lot of hard work and dedication, but we
             managed to finish the project on time.</p>
      </div>
      <div>
        <img src="" alt="icon" />
        <h2>Professionalism</h2>
        <p>Conduct, aims, or qualities that
             characterize or mark a profession
            or a professional person and it defines
            a profession as "a calling requiring specialized
            knowledge and often long and intensive academic 
            preparation".</p>
      </div>

      <div>
        <img src="" alt="icon" />
        <h2>Punctual</h2>
        <p>The word has meant lots
            of other things through
            the centuries, usually involving
             being precise about small points
            . And today punctuality is all about time,
            a punctual train or a punctual payment or a 
            punctual person shows up "on the dot".</p>
      </div>
      </div>
      <div>
        <div className='team'>
          <h3>Gravure Link Team</h3>
        </div>
        <div className='team'>
            <img src="/team-1.jpg" alt="profile" className='img' />
            <h4>Prem Neupane</h4>
            <p>Managing Director</p>
        </div>
        <div className='team'>
            <img src="/team-2.jpg" alt="profile" className='img' />
            <h4>Mahesh Shrestha</h4>
            <p>Director</p>
        </div>
        <div className='team'>
            <img src="/team-3.jpg" alt="profile" className='img' />
            <h4>Krishna Neupane</h4>
            <p>Director</p>
        </div>
        <div className='team'>
            <img src="/team-4.jpg" alt="profile" className='img' />
            <h4>Rahul Ray</h4>
            <p>Designer</p>
        </div>
      </div>
    </>
  )
}

export default AboutUs
