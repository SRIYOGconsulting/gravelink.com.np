import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import ServicesWeOffer from '../components/ServicesWeOffer'
import Testmonials from '../components/Testmonials'
import SplashScreen from '../components/SplashScreen'
import './Home.css'

const Home = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <SplashScreen loading={loading} setLoading={setLoading} />
      ) : (
        <div className='home'>
          <Hero />
          <About  />
          <ServicesWeOffer />
          <Testmonials />
        </div>
      )}
    </>
  )
}

export default Home