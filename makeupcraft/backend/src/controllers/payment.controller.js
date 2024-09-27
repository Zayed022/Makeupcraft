import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Payment } from "../models/payment.model.js";

exports.createOrder = async (req, res) => {
    const { userId, amount, currency } = req.body; // Amount in smallest currency unit (e.g., cents for USD, paise for INR)
  
    try {
      // Step 1: Create a Payment Intent with Stripe
      const paymentIntent = await stripe.paymentIntents.create({
        amount,  // Ensure this is in the smallest currency unit (e.g., cents, paise)
        currency,
        payment_method_types: ['card'],  // Default is 'card', you can add 'upi', 'netbanking' etc.
      });
  
      // Step 2: Store order in your database
      const newOrder = new Order({
        userId,
        amount,
        currency,
        paymentIntentId: paymentIntent.id,  // Save the Payment Intent ID from Stripe
        status: 'pending',  // Initially set the order status to pending
      });
  
      const savedOrder = await newOrder.save();
  
      // Step 3: Respond to the client with the client_secret for Stripe payment
      res.status(201).json({
        orderId: savedOrder._id,
        clientSecret: paymentIntent.client_secret,
        status:"confirmed",
        // This will be used on the frontend to complete the payment
      });
  
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const getPayment = asyncHandler(async(req,res)=>{
    const payment = await Payment.find();
    res
    .status(200)
    .json(
        
        payment,
        
    )
})

export {
    createOrder
}