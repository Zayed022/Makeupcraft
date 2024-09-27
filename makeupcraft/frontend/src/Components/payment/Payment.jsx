import React from 'react';
import PaymentForm from '../PaymentForm';
import { Link, useLocation } from 'react-router-dom';

function Payment() {
  const location = useLocation();
  const { price,courseName } = location.state || {};  
 
  // Access amount, or handle undefined state
  const validAmount = !isNaN(price) ? price : 0;
  return (
    <div className=' bg-pink-200 flex flex-col justify-center items-center min-h-screen shadow-2xl'>
      <h1 className='text-4xl text-green-500 shadpw-xl'>Payment for: {courseName}</h1><br />
      <p className='text-2xl text-slate-500'>Amount: ₹{price}</p><br />
      {/* Ensure amount is passed properly as a prop */}
      <PaymentForm amount={price} />
      <Link to='/'>
      <button className=' m-10 btn btn-primary'>Back</button>
      </Link>
    </div>
  );
}

export default Payment;
