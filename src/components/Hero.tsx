import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import './Hero.css'
import { BsArrowRight } from "react-icons/bs";


const Hero = () => {
  const slides = [
    {
      img: "/slide1.jpg",
      text: "First & Fast Printing",
      link: "Services"
    },
    {
      img: "/slide2.jpg",
      text: "Engrving your design",
      link: "Services"
    },
    {
      img: "/slide3.jpg",
      text: "Serving Since 2009",
      link: "Services"
    }

  ]
  return (
    <div className='hero-container'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="hero-Swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slide-item">
              <div className='hero-slide-img'>
              <img src={slide.img} alt="" />
              </div>
              </div>
              <div className='slide-text-container'>
                <div className="slide-text">
                  <h1 className='swipper-h1'>{slide.text} <a href="./services"><h3 className='slide-link'>{slide.link }<BsArrowRight /> </h3></a> </h1>
                </div>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hero
