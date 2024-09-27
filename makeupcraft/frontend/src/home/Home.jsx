import React from 'react'
import Navbar from '../Components/Navbar'
import Freebook from '../Components/Freebook'
import Footer from '../Components/Footer'
import Banner from '../Components/banner'
import Test from '../Components/Test'
import Timeline from '../Components/Timeline'
import Testimonials from '../Components/Testimonials'
function Home() {
  return (
    <>
        <Navbar/>
        <Test/>

      <Freebook/>
      <Timeline/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default Home
