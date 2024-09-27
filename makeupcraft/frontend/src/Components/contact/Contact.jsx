import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import ContactUs from '../Contactus'


function Contact() {
  return (
    <div className='max-w-screen-2xl container mx-auto   shadow 6xl md:px-20 px-4' >

        <Navbar/>
        <br />
        <br />
        <br />
        <br />
        <h1 className='text-yellow-500 flex text-center justify-center'>If you have any queries Please feel free to reach out to us. We will respond to your query as soon as possible</h1>
        <ContactUs/>
        <Footer/>
        
      
    </div>
  )
}

export default Contact
