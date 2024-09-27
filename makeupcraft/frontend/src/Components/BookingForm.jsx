import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Booking = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [serviceId, setServiceId] = useState('');
    const [services, setServices] = useState([]); // Assuming service data is fetched from backend
    const [loading, setLoading] = useState(false);
    const [availability,setAvailability]=useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        // Fetch services when component mounts
        
    axios.get('/api/v1/services/get-service')
        .then((response)=>{
            setServices(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        
    })
    const checkAvailability = async()=>{
        try{
            const response= await axios.get('/api/v1/booking/check-availability',{
                date,
                time,
            })
            const data=response.data;
            setAvailability(data.available?"Slot is available":"Booked");
        }catch(error){
            console.log("Error checking slot availability",error);
            setAvailability("Error checking slot availability");
        }
    }

    const handleBooking = async () => {
        setLoading(true);
        try {
            // Create a booking and Razorpay order
            const response = await axios.post('/api/v1/booking/book-slot', {
                date,
                time,
                serviceId,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = response.data
            console.log("Booking response data: ",data)

            if (data.success) {
                const booking = data.booking;
                console.log("Booking Details: ",booking)
                const bookingId=booking._id
                navigate('/payment2', { 
                    state: { 
                        price: booking.service.price, 
                        service: booking.service.name,
                        bookingId:booking._id,
                        date:date,
                        time:time
                    } 
                });

            } else {
                alert(data.message || 'Slot booking failed');
            }
        } catch (error) {
            console.error('Error booking slot:', error);
            alert('An error occurred while booking the slot.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='text-center justofy-center item-center gap-10 mt-20'>
            <h2 className='text-3xl mt-30 text-pink-400'><b>Book a Slot</b> </h2>
            <div className='mt-5'>
                <label className='text-xl mt-10 '>Select Date:</label>
                <input className='text-xl'
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>

            <div className='mt-2'>
                <label className='text-xl mt-10' >Select Time:</label>
                <input className='text-xl'
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
            </div>

            <div className='mt-2'>
                <label className='text-xl mt-10'>Select Service:   </label>
                <select className='mt-2' value={serviceId} onChange={(e) => setServiceId(e.target.value)}>
                    <option value=""> Select a Service</option>
                    {services && services.length > 0 ?(services.map((service) => (
                        <option key={service._id} value={service._id}>
                            {service.title} - ₹{service.price}
                        </option>
                    ))):(<option value="">Loading services...</option>)}
                </select>
            </div>
            {/*}
            <button onClick={checkAvailability}>
                Show Availability
            </button>
            {availability && <p>{availability}</p>}{*/}
            
            <button className='px-2 py-1 bg-pink-400 rounded-lg mt-5 hover:bg-green-400 hover:scale-105 md:px-3 py-2'onClick={handleBooking}   disabled={loading}>
                {loading ? 'Processing...' : 'Book and Pay'}
            </button>
            
        </div>
    );
};

export default Booking;
