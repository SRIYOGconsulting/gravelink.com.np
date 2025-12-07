import React from 'react'
import './AboutUs.css'


const IconBuilding = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="2" x2="9" y2="22"></line><line x1="15" y1="2" x2="15" y2="22"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="10" x2="20" y2="10"></line><line x1="4" y1="14" x2="20" y2="14"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
);
const IconRoller = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2v8Z"/><path d="M16 12v5a3 3 0 0 1-6 0v-2"/></svg>
);
const IconPencil = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21.174 6.812-5.908-5.908a2.598 2.598 0 0 0-3.675 0l-3.376 3.377a2.599 2.599 0 0 0 0 3.675l5.909 5.908a2.599 2.599 0 0 0 3.674 0l3.376-3.376a2.598 2.598 0 0 0 0-3.676Z"/><path d="m11 11 3 3"/><path d="m2 22 2.586-2.586"/><circle cx="11" cy="13" r="1" transform="rotate(-45 11 13)"/></svg>
);

const AboutUs = () => {
  return (
    <div className='page-wrapper'>
      
    
      <div className='brief-section'>
        <div className='img-container'>

          <img src="images/about/about-us.png" className='about-img' alt="About Gravure" />
        </div>
        <div className='brief-content'>
          <h3 className='brief-title'>BRIEF<br />ABOUT<br />US.</h3>
          <div className='brief-text'>
            <p><b>Gravure Link Nepal Pvt. Ltd.</b>A leader in the printing sector and producing Rotogravure Electronic Printing Cylinders of the highest caliber. We serve many renowned companies around the country by offering specialized, precised, long-lasting, and artistically exceptional printing cylinders, ensuring a unique identity for brands. With 16 years of experience, we have established ourselves as market leaders, and our cylinders are among the most on-demand items in the flexi-printing manufacturing industry. With all the engraving facilities under a single roof, we are the largest manufacturer of rotogravure cylinders. We offer the cutting-edge technology.Strategic location, enabling ease of reach and transportation.</p>
            <p>Established ourselves as a quality cylinder manufacturer, competing magnificently with electronically engraved cylinders in terms of printing quality under the brand name "Gravure Link Nepal Pvt. Ltd. a renowned company in Nepal, producing the finest quality gravure. To provide the highest quality product, we are proud of our highly skilled and qualified technicians from India who have at least 10-15 years of work experience.</p>
            <br />
           
          </div>
        </div>
      </div>

  
      <div className='features-wrapper'>
        <div className='features-label'>
          <div className='accent-line'></div>
          <h3>WHAT<br />WE<br />DO</h3>
        </div>

        <div className='features-grid'>
          <div className='feature-card'>
            <div className='icon-box'><IconBuilding /></div>
            <h2>Dedication</h2>
            <p>A feeling of very strong support for or loyalty to someone or something : the quality or state of being dedicated to a person, group, cause, etc. It took a lot of hard work and dedication, but we managed to finish the project on time.</p>
          </div>

          <div className='feature-card'>
            <div className='icon-box'><IconRoller /></div>
            <h2>Professionalism</h2>
            <p>Conduct, aims, or qualities that characterize or mark a profession or a professional person and it defines a profession as "a calling requiring specialized knowledge and often long and intensive academic preparation".</p>
          </div>

          <div className='feature-card'>
            <div className='icon-box'><IconPencil /></div>
            <h2>Punctual</h2>
            <p>The word has meant lots of other things through the centuries, usually involving being precise about small points. And today punctuality is all about time, a punctual train or a punctual payment or a punctual person shows up "on the dot".</p>
          </div>
        </div>
      </div>

     
      <div className='team-section-wrapper'>
        <h3 className='team-main-title'>Gravure Link Team</h3>
        
        <div className='team-grid'>
          <div className='team-member'>
            <div className='profile-circle'>
              <img src="/images/team/team-1.jpg" alt="Prem Neupane" />
            </div>
            <h4>Prem Neupane</h4>
            <p>Managing Director</p>
          </div>

          <div className='team-member'>
            <div className='profile-circle'>
              <img src="/images/team/team-2.jpg" alt="Mahesh Shrestha" />
            </div>
            <h4>Mahesh Shrestha</h4>
            <p>Director</p>
          </div>

          <div className='team-member'>
            <div className='profile-circle'>
              <img src="/images/team/team-3.jpg"alt="Krishna Neupane" />
            </div>
            <h4>Krishna Neupane</h4>
            <p>Director</p>
          </div>

          <div className='team-member'>
            <div className='profile-circle'>
              <img src="/images/team/team-4.jpg" alt="Rahul Ray" />
            </div>
            <h4>Rahul Ray</h4>
            <p>Designer</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default AboutUs