import React from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentForm = ({ amount }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { price, service, date, time, bookingId } = location.state || {};


  const handleCheckout = async () => {
    try {
      if (!amount || isNaN(amount)|| amount<=0) {
        alert('Invalid amount');
        return;
      }
      const response = await axios.post('/api/v1/booking/pay', { 
        amount,
        bookingId
       });
      const { data } = response;
      console.log(amount)

      const options = {
        key: "rzp_test_Zuq92wa28cY52B",
        amount: data.amount,
        currency: data.currency,
        name: 'MakeUp Craft by Sana',
        description: 'Payment Description',
        order_id: data.id,
        handler: async(response) => {
          console.log("Razorpay Response: ",response)
          const paymentData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            bookingId: data.booking._id||"Booking ID missing",
          }
          console.log("Payment Details: ",paymentData)
          const verifyResponse = await axios.post('/api/v1/booking/verify-payment', paymentData, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const verifyData = verifyResponse.data;
        if (verifyData.success) {
          console.log(bookingId,date,time,service)
          // After successful payment verification, navigate to confirmation page
          navigate('/confirmation', { state: { bookingId, service, date, time } });
      } else {
        
          alert('Payment verification failed.');
      }
        
        },
        prefill: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#F37254',
        },
      };
      if (typeof window.Razorpay === 'undefined') {
        console.error('Razorpay SDK not loaded');
        alert('Razorpay SDK not loaded. Please try again later.');
        return;
      }

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div className='text-2xl text-blue-400 px-2 py-1'>
      <button className='btn btn-primary' onClick={handleCheckout}>Pay ₹{amount} with Razorpay</button>
    </div>
  );
};

export default PaymentForm;
