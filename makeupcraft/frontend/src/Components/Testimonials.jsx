import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import Template from "./Template";
import axios from "axios";

function Testimonials() {
    const [testimonials,setTestimonials] = useState([])
    useEffect(()=>{
        axios.get('/api/v1/testimonials/get-testimonials')
        .then((response)=>{
            setTestimonials(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        
    })

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
      <div >
        <h1 className="text-pink-500 flex items-center justify-center text-2xl m-5">Checkout some of the reviews from our happy clients</h1>
        <div className="max-w-screen-2xl container  mx:auto md:px-20 width:full space-x-5 gap-4 px-1 justify-center item-center">
        <Slider {...settings}>
        {testimonials.length > 0 ? (
                        testimonials.map((test) => (
                            <Template key={test.id} test={test} />
                        ))
                    ) : (
                        <p>No reviews available.</p>
                    )}
                    </Slider>
        </div>
        <br />
        
      </div>
    </>
  );
}

export default Testimonials;
