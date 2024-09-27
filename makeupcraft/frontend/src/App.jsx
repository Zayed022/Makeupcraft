import React from 'react'
import Home from './home/Home'
import { Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './Components/Signup'
import Login from './Components/Login'
import {Toaster} from 'react-hot-toast'
import Logout from './Components/Logout'
import Contact from './Components/contact/Contact'
import About from './Components/about/About'
import Explore from './Components/brides/Explore'
import Brides from './Components/Brides'
import HairStyles from './Components/HairStyles'
import ContactUs from './Components/Contactus'
import Test from './Components/Test'
import Services from './Components/service/Services'
import Exploreservices from "./Components/Exploreservices"
import Descriptions from './Components/description/Descriptions'
import Payment from './Components/payment/Payment'

import Jobs from './Components/Jobs'
import BookingForm from './Components/BookingForm'
import PaymentService from './Components/payment/PaymentService'
import ConfirmationPage from './Components/ConfirmationPage'
function App() {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/brides" element={<Brides/>}/>
        <Route path="/booking" element={<BookingForm/>}/>
        <Route path="/hairstyles" element={<HairStyles/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/explore-services" element={<Descriptions/>}/>
        <Route path='payment' element={<Payment/>}/>
        <Route path='payment2' element={<PaymentService/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
      </Routes>
      <Toaster/>
      </div>
    </>
  )
}

export default App
