import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from "axios"
import { Link } from 'react-router-dom'
function Course() {
    const [course,setCourse] = useState([])
    useEffect(()=>{
        axios.get('/api/v1/courses/getCourse')
        .then((response)=>{
            setCourse(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        
    })
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here!:)</span></h1>
            <p className='mt-12 '>We are provideing some valuable courses for you to make you a professional artist</p>
            <Link to="/">
            <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'> Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {course.length > 0 ? (
                        course.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    ) : (
                        <p>No courses available.</p>
                    )}
        </div>

    </div>
    </>
  )
}

export default Course
