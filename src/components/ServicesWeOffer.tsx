import React from 'react'
import './ServicesWeOffer.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Link } from 'react-router-dom'

const ServicesWeOffer = () => {
  const slides = [
    { id: 1, title: 'Design & Branding', image: '/images/services/1.jpg' },
    { id: 2, title: 'Coating Cylinder', image: '/images/services/2.jpg'},
    { id: 3, title: 'Packet Printing', image:'/images/services/3.jpg'},
    { id: 4, title: 'Printing Cylinder', image:'/images/services/4.jpg' },
    { id: 5, title: 'Package Designing', image: '/images/services/5.jpg' },
  ];

  return (
    <div className='services-we-offer-container'>
      <h1>Services We Offer</h1>

      <h4>Branding</h4>
      <div>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={60}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 9999,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          slidesPerView={3}
          breakpoints={{
            0: {        
              slidesPerView: 1,
              spaceBetween: 20,
            },
            
            750: {      
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1000: {     
              slidesPerView: 3,
              spaceBetween: 50,
            },
            
          }}

          className="services-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide className='card' key={slide.id}>
              <div className="slide-content">
                <img src={slide.image} alt={slide.title} className="slide-image" />
                <div className="services-swiper-text">
                  <h3 className=''>{slide.title}</h3>
                  <Link to="/services">See project &gt;</Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ServicesWeOffer
