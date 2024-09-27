import mongoose,{Schema} from "mongoose";

const collectionSchema = new Schema({
    photoName:{
        type:String,
    },
    photo:{
        type:String,
    }
},{timestamps:true})

export const Collection = mongoose.model("Collection",collectionSchema)