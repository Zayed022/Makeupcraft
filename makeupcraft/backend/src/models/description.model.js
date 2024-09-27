import mongoose,{Schema} from "mongoose";

const descriptionSchema = new Schema ({
    description1:{
        type:String,
        required:true,
    },
    description2:{
        type:String,
    },
    description3:{
        type:String,
    },
    description4:{
        type:String,
    },
    description5:{
        type:String,
    },
    description6:{
        type:String,
    },
    price:{
        type:Number,
    }
    

},{timestamps:true})

export const Description = mongoose.model("Description",descriptionSchema);