import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Testimonials = () => {
  const slides = [
    {
      img: "/images/testmonials/1.jpg",
      name: "Bishwash Kr Pandey",
      company: "Sunrise Bara Udhyog",
      text: "Design in the backbone of every branding. I'm very happy with my experience. Gravure Link Nepal delivers my project on time. All th staffs are professional and cooperative."
    },
    {
      img: "/images/testmonials/2.jpg",
      name: "Santosh Kumar Atal",
      company: "Krishna Fabricators",
      text: "I've been manufacturing laminated sacks. My one stop solution is Gravure Link Nepal for providing me th ebest quality in reasonable price. I make and deliver sacks all over Nepal. Anyone can order me for laminated sacks."
    },
    {
      img: "/images/testmonials/3.jpg",
      name: "Bipul Rijal",
      company: "Pashupati Dalmoth Udhyog",
      text: "I have been working with Gravure Link Nepal since many years. My experience with their design and fdelivery is great. All my companies work goes to Gravelink for color separation, desigining, prototyping etc."
    },
    {
      img: "/images/testmonials/4.jpg",
      name: "Praksah Upreti",
      company: "Pracas Infosys",
      text: "I'm impressed with Gravure Link Nepal service. They have multiple products undera roof. Most of all our design and branding owrks are handled by them. They are dedicated and trustworthy in every aspects."
    }
  ]
  return (
    <div className="testmonials-section">
      <div className='testmonials-container dotted'>
        <h1 className='testmonials-title'>Testimonials</h1>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          className="testimonials-Swiper"
          loop={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1250: {
              slidesPerView: 2,
              spaceBetween: 80,
            },
          }}
        >
          {
            slides.map((slide, index) => {
              return (
                <SwiperSlide key={index} >
                  <div className='testmonials '>
                    <div className="testmonials-img-div">
                      <img src={slide.img} alt="" className='testmonials-img' />
                    </div>
                    <div className='testmonials-name-label'>
                      <div>
                      <p className='testimonials-name'><b>{slide.name} </b>/ <span>{slide.company}</span> </p>
                      </div>
                      <div><img src="/images/testmonials/double-quotes.png" className='double-quote' alt="" /></div>
                    </div>
                    <div>
                      <p className='testimonials-text'>{slide.text}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>


      </div>
    </div>

  )
}

export default Testimonials
