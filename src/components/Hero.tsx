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
      text: "Engraving your design",
      link: "Services"
    },
    {
      img: "/slide3.jpg",
      text: "Serving Since 2009",
      link: "Services"
    }
  ];

  return (
    <div className='hero-container'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 9000 }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-slide-item">
              <img src={slide.img} alt="" className="hero-img" />

              <div className="slide-text-container">
                <h1 className="slide-heading">{slide.text}</h1>

                <a href="./services" className="slide-link">
                  {slide.link} <BsArrowRight />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hero
