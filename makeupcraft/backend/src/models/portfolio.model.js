import mongoose,{Schema} from "mongoose";

const portfolioSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    photoCollection:[
        {
            type:Schema.Types.ObjectId,
            ref:"Collection"
        }
    ],

},{timestamps:true});

export const Portfolio = mongoose.model("Portfolio",portfolioSchema);