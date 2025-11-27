import React from 'react'
import './Testmonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Testmonials = () => {
  const slides = [
    {
      img: "https://gravelink.com.np/images/home/testimonials/1.jpg",
      name: "Bishwash Kr Pandey",
      company: "Sunrise Bara Udhyog",
      text: "Design in the backbone of every branding. I'm very happy with my experience. Gravure Link Nepal delivers my project on time. All th staffs are professional and cooperative"
    },
    {
      img: "https://gravelink.com.np/images/home/testimonials/2.jpg",
      name: "Santosh Kumar Atal",
      company: "Krishna Fabricators",
      text: "I've been manufacturing laminated sacks. My one stop solution is Gravure Link Nepal for providing me th ebest quality in reasonable price. I make and deliver sacks all over Nepal. Anyone can order me for laminated sacks"
    },
    {
      img: "https://gravelink.com.np/images/home/testimonials/3.jpg",
      name: "Bipul Rijal",
      company: "Pashupati Dalmoth Udhyog",
      text: "I have been working with Gravure Link Nepal since many years. My experience with their design and fdelivery is great. All my companies work goes to Gravelink for color separation, desigining, prototyping etc."
    },
    {
      img: "https://gravelink.com.np/images/home/testimonials/4.jpg",
      name: "Praksah Upreti",
      company: "Pracas Infosys",
      text: "I'm impressed with Gravure Link Nepal service. They are dedicated and thrustworthy in every ascept"
    }
  ]
  return (
    <div className='testmonials-container'>
      <h1>Testmonials</h1>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        
        className="testimonials-Swiper"
      >

        {
          slides.map((slide, index) => {
            return (
              <SwiperSlide key={index} >
              <div className='testmonials'>
                <img src={slide.img} alt="" className='testmonials-img' />
                <p><b>{slide.name}</b>/ {slide.company}</p>
                <div>
                  <p>{slide.text}</p>
                </div>
              </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
     

    </div>

  )
}

export default Testmonials
