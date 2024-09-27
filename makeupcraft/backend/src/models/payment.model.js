// orderModel.js
import mongoose,{Schema} from "mongoose";

// Define the schema for Orders
const paymentSchema = new Schema({
  phone: {
    type: Number,
    required: true,
  },
  
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status:{
    type:mongoose.Schema.Types.ObjectId,
      ref:"Booking",
  }
});

// Create the model
export const Payment = mongoose.model("Payment",paymentSchema);
