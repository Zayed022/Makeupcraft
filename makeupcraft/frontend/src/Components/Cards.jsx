import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Cards({item}) {
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
    <p>{item.content}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Price:₹{Number(item.price)}</div>
      <div
                className="cursor-pointer px-2 py-1 rounded-full border-2px hover:bg-pink-500 hover:text-white p-2 duration-200"
                onClick={handleBuyNow}
              >
                Buy Now
              </div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
