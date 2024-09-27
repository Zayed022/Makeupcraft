import Razorpay from "razorpay"
import {Router} from "express"
import dotenv from "dotenv";
import { Booking } from "../models/booking.model.js";

// Load environment variables
dotenv.config();
const router=Router()

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,    // Get from Razorpay dashboard
    key_secret: process.env.RAZORPAY_KEY_SECRET, // Get from Razorpay dashboard
});

router.post('/order', async (req, res) => {
  const { amount,bookingId } = req.body;
  const booking = await Booking.findById(bookingId);

  if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
  }
  const options = {
      amount: amount * 100, // Amount in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
  };
  
  try {
      const order = await razorpayInstance.orders.create(options);
      
      return res.status(200).json({id:order.id,
        currency:order.currency,
        amount:order.amount,
        booking:{
            _id:bookingId
        },
        
        message:"Order created successfully"});
  } catch (error) {
      res.status(500).send("Error creating order");
  }
});
/*
import crypto from "crypto"
import { Booking } from "../models/booking.model";

router.post('/verify', (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    const generatedSignature = hmac.digest('hex');

    if (generatedSignature === razorpay_signature) {
        res.json({ status: "Payment successful" });
    } else {
        res.status(400).send("Payment verification failed");
    }
});
*/


export default router