import { div } from 'framer-motion/client';
import React from 'react'


const IconBuilding = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" />
    <path d="M5 21V7l8-4v18" />
    <path d="M13 21h6V9l-6-2" />
    <path d="M9 9h1" />
    <path d="M9 12h1" />
    <path d="M9 15h1" />
    <path d="M9 18h1" />
  </svg>
);

const IconRoller = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="16" height="6" rx="1" />
    <path d="M18 6h2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-7" />
    <rect x="10" y="13" width="2" height="8" rx="1" />
  </svg>
);

const IconPencil = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="50" 
    height="50" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="black" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21 21H3V3l18 18Z" />
    
    <path d="M10.5 13.5l6-6a2.121 2.121 0 0 1 3 3l-6 6l-3.5 1l.5-4Z" />
    <path d="M15 9l3 3" />
  </svg>
);

const AboutUs = () => {
  return (
    <div>
    <div className='page-wrapper'>
      <div className="about-img">
        <img src="images/about/about.png" className='about-img' alt="About Gravure" />
      </div>
      <div className="about-us">
        <div>
          <div className='features-wrapper'>
            <div className='features-label'>
              <div className='accent-line'></div>
              <h3 className='breif-about-us' >BRIEF<br />ABOUT<br />US</h3>
            </div>

            <div className='brief-right'>

              <div className='brief-text'>
                <p><b style={{ color: "#000" }}>Gravure Link Nepal Pvt. Ltd. </b>A leader in the printing sector and
                 producing Rotogravure Electronic Printing Cylinders of the highest caliber. We serve many renowned companies
                  around the country by offering specialized, precised, long-lasting, and artistically exceptional printing
                   cylinders, ensuring a unique identity for brands. With 16 years of experience, we have established ourselves
                    as market leaders, and our cylinders are among the most on-demand items in the flexi-printing manufacturing
                     industry. With all the engraving facilities under a single roof, we are the largest manufacturer of rotogravure
                      cylinders. We offer the cutting-edge technology.Strategic location, enabling ease of reach and transportation.</p>
                <br />

                <p>Established ourselves as a quality cylinder manufacturer, competing magnificently with electronically engraved
                   cylinders in terms of printing quality under the brand name "Gravure Link Nepal Pvt. Ltd. a renowned company in Nepal,
                    producing the finest quality gravure. To provide the highest quality product, we are proud of our highly skilled and
                     qualified technicians from India who have at least 10-15 years of work experience.</p>
              </div>
            </div>
          </div>
            
          <div className='features-wrapper '>
            <div className='features-label'>
              <div className='accent-line'></div>
              <h3 className='what-we-do'>WHAT<br />WE<br />DO</h3>
            </div>
            <div className='features-grid '>
              <div className='feature-card'>
                <div className='icon-box'><IconBuilding /></div>
                <h2>Dedication</h2>
                <p>A feeling of very strong support for or loyalty to someone or something :
                   the quality or state of being dedicated to a person, group, cause, etc. It took
                    a lot of hard work and dedication, but we managed to finish the project on time.</p>
              </div>

              <div className='feature-card'>
                <div className='icon-box'><IconRoller /></div>
                <h2>Professionalism</h2>
                <p>Conduct, aims, or qualities that characterize or mark a profession or a professional person and it defines
                   a profession as "a calling requiring specialized knowledge and often long and intensive academic preparation".</p>
              </div>

              <div className='feature-card'>
                <div className='icon-box'><IconPencil /></div>
                <h2>Punctual</h2>
                <p>The word has meant lots of other things through the centuries, usually involving being
                   precise about small points. And today punctuality is all about time, a punctual train or a punctual
                    payment or a punctual person shows up "on the dot".</p>
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
                  <img src="/images/team/team-3.jpg" alt="Krishna Neupane" />
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
      </div>
    </div>
    </div>
  )
}

export default AboutUs