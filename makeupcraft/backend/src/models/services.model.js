import mongoose,{Schema} from "mongoose"

const serviceSchema =  new Schema({
    title:{
        type: String,
        required:[true,"Title is required"],
        maxlength: [50, 'Title cannot be more than 50 characters'],
    },
    descriptions:[
        {
            type:Schema.Types.ObjectId,
            ref:"Description"
        }
    ] ,  
    price:{
        type:Number,
    },
    thumbnail:{
        type:String,
    }


})

export const Service = mongoose.model("Service",serviceSchema);