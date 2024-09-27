import mongoose,{Schema} from "mongoose"
const courseSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    content:[
        {
            type:Schema.Types.ObjectId,
            ref:"Content"
        }
    ],
    price:{
        type:Number,
    },
    thumbnail:{
        type:String,
    }
},{timestamps:true})

export const Course = mongoose.model("Course",courseSchema);
