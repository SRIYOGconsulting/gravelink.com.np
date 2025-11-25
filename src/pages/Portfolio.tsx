import React from 'react'

import './Portfolio.css'

const Portfolio = () => {
  return (
    <div>
    <h1>View Our Portfolio</h1>
    <div className='img-div'>
        <h1>Coco Crunch</h1>
        <img src="/1.jpg" alt="" />
    </div>
    <div className='img-div'>
        <h1>Rum Pam</h1>
        <img src="/2.jpg" alt="" />
    </div>
     <div className='img-div'>
        <h1>ABC</h1>
        <img src="/3.jpg" alt="" />
    </div>
    </div>
  )
}

export default Portfolio
