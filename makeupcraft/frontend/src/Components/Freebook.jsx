import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import React, { useEffect, useState } from 'react'
import Cards from "./Cards";

function Freebook() {
  const [course,setCourse] = useState([]);
  
  useEffect(()=>{
    const getCourse=async()=>{
      try{
          const res = await axios.get("http://localhost:4000/api/v1/courses/getCourse");
          const data =res.data.filter((data)=> data.price === 0)
          console.log(data)
          
          setCourse(data)
      }catch(error){
          console.log(error)
      }
  }
  getCourse();
  },[])


    

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
   <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'> 
        <div>
        <h1 className='font-semi-bold text-xl pb-2 '>Free Courses Offered By Us</h1>
        <p>Get an overview of our course structure by exploring free available courses</p>
        </div>
    
    <div>
    <Slider {...settings}>
        {course.map((item)=>(
          <Cards item={item} key ={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
   </>
  )
}

export default Freebook
