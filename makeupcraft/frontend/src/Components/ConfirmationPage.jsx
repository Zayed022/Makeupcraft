import { useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
    const location = useLocation();
    const { bookingId, service, date, time } = location.state || {};

    return (
        <>
        <div className=''>
        <div className=' screen-h text-center mt-20 item-center justify-center md:mt-70 '>
            <h2 className='text-2xl text-green-400 md:text-4xl mt-30 mb-15px'><b>Booking Confirmation</b></h2>
            <p className='text-xl mt-2 md:text-2xl'>Your booking has been confirmed!</p>
            <p className='mt-3 md:text-xl mt-5px'><strong className='text-pink-400'>Booking ID:</strong> {bookingId}</p>
            <p className='md:text-xl mt-5px'><strong className='text-pink-400'>Service:</strong> {service}</p>
            <p className='md:text-xl'><strong className='text-pink-400'>Date:</strong> {date}</p>
            <p className='md:text-xl'><strong className='text-pink-400'>Time:</strong> {time}</p>
            <p className='mt-3 md:text-xl'>Thank you for your payment. <br /> A confirmation email has been sent to your inbox.</p>
            
        </div>
        </div>
        </>
    );
};

export default ConfirmationPage;
