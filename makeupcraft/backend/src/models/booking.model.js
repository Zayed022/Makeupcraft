import mongoose,{Schema} from "mongoose";

const bookingSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
       
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    status:{
        type:String,
        
        default:'Pending'
    },
    price:{type:Number,required:true},
   
 } ,{timestamps:true});

export const Booking = mongoose.model("Booking",bookingSchema)