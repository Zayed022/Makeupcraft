import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Booking } from "../models/booking.model.js";
import { Service } from "../models/services.model.js";
import Razorpay from "razorpay";
import crypto from "crypto"
const getAvailability = asyncHandler(async(req,res)=>{
    const {date,time}=req.query;
    try{
        const booking= await Booking.findOne({date,time,status:"confirmed"});
        if(booking){
            return res.status(200).
            json({available:false,message:"Slot not available"})
        }
        else{
            return res.status(200).
            json({available:true,message:"Slot available"});
        }
    }catch(error){
        console.log(error)
        return res.status(500).
        json({message:"Error checking availability"});
    }
});

const bookSlot= asyncHandler(async(req,res)=>{
    const {date, time, serviceId}=req.body;
    try{
        const existingBooking = await Booking.findOne({date});
        if(existingBooking){
            return res.status(200)
            .json({message: "Time slot already booked"})
        }
        const service = await Service.findById(serviceId);
        if(!service){
            return res.status(404).json({message:"Service not found"});
        }
        const newBooking=await Booking.create({
            //user:user._id,
            date,
            time,
            service:service._id,
            status:"pending",
            price:service.price,
        });
        const savedBooking = await newBooking.save();
        res.status(201).json({
            success: true,
            booking: {
                _id: savedBooking._id,
                service: {
                    name: service.title,
                    price: service.price
                },
                amount: service.price, // Send amount for payment
                message: "Slot booked successfully"
            }
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error creating booking" });
    }
})

const pay= asyncHandler(async(req,res)=>{
    const {bookingId,amount}=req.body;
    const instance= new Razorpay({
        key_id:process.env.RAZORPAY_KEY_ID,
        key_secret:process.env.RAZORPAY_KEY_SECRET,
    });
    const options={
        amount:amount*100,
        currency:'INR',
        receipt:`receipt_${bookingId}`
    };
    try{
        const order= await instance.orders.create(options);
        

        res.status(200).json({
            id:order.id,
            amount:order.amount,
            currency:order.currency,
            booking:{
                _id:bookingId
            }
        });
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:"Payment failed",error});
    }
});

const confirmPayment= asyncHandler(async(req,res)=>{
    //const {bookingId , razorpay_order_id,razorpay_payment_id,razorpay_signature}= req.body;
    /*
    try{
        const booking = await Booking.findById(bookingId);
        console.log(booking)
        if(!booking){
            return res.status(404).json({message:'Booking not found'})
        }
        booking.paymentStatus='Paid';
        await booking.save();
        res.status(200).json({message:"Payment successful",booking});
    }catch(error){
        console.log(error)
        res.status(500).json({message:"Error confirming payment",error});
    }
        */
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId } = req.body;

  const secret = process.env.RAZORPAY_KEY_SECRET;
  const generated_signature = crypto.createHmac('sha256', secret)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest('hex');

  // Check if the signature matches
  if (generated_signature === razorpay_signature) {
    try {
      // Update the booking status as confirmed
      await Booking.findByIdAndUpdate(bookingId, { status: 'confirmed' });

      res.status(200).json({ success: true, message: 'Payment verified successfully' });
    } catch (error) {
      console.error('Error updating booking:', error);
      res.status(500).json({ success: false, message: 'Error confirming booking', error });
    }
  } else {
    res.status(400).json({ success: false, message: 'Payment verification failed' });
  }
})






export{
    getAvailability,
    bookSlot,
    pay,
    confirmPayment
}