import React, { useEffect, useState } from 'react'
import Servicecards from './Servicecards'
import axios from "axios"
import { Link } from 'react-router-dom'
function Service() {
    const [service,setService] = useState([])
    useEffect(()=>{
        axios.get('/api/v1/services/get-service')
        .then((response)=>{
            setService(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        
    })
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 space-y-10 m-10 md:mt-'>
        <br />
        <div className='  items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here!:)</span></h1>
            <p className='mt-12 '>We are provideing some valuable affordable and quality services for you to give you your <span className='text-pink-500'> dreamy look!</span></p>
            <Link to="/">
            <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'> Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 flex item-center justify-center'>
        {service.length > 0 ? (
                        service.map((item) => (
                            <Servicecards key={item.id} item={item} />
                        ))
                    ) : (
                        <p>No service available.</p>
                    )}
        </div>

    </div>
    </>
  )
}

export default Service
