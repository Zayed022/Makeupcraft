import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Servicecards({item}) {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    // Navigate to payment page and pass the course price and name
    navigate('/payment', {
      state: { price: Number(item.price), courseName: item.title },
    });
  };
    
  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
  <figure>
    <img
      src={item.thumbnail}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.title}
      
    </h2>
    {item.descriptions.description1}
    <div className="card-actions justify-between">
      <div className="badge badge-outline">₹{item.price}</div>
      <Link to='/payment'>
      <div className="cursor-pointer px-2 py-1 rounded-full border-2px hover:bg-pink-500 hover:text-white p-2 duration-200"  onClick={handleBuyNow}>Book now</div>
      </Link>
      <Link to='/explore-services'>
      <div className="cursor-pointer px-2 py-1 rounded-full border-2px hover:bg-pink-500 hover:text-white p-2 duration-200">Explore</div>
      </Link>
    </div>
  </div>
</div>

    </div>
    </>
  )
}

export default Servicecards
