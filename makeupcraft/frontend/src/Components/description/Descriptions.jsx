import React from 'react'
import Navbar from '../Navbar'

import DescriptionsList from '../Descriptionlist'
import Footer from '../Footer'

function Descriptions() {
  return (
    <div className=''>
      <Navbar/>
      <div className='min-h-screen mt-20'><DescriptionsList/></div>
      
      <div className='screen-width'><Footer/></div>
    </div>
  )
}

export default Descriptions
