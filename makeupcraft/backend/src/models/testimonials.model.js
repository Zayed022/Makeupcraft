import mongoose,{Schema} from "mongoose"

const testimonialsSchema = new Schema({
    title:{
        type:String,
    },
    feedback:{
        type:String,
    }

},{timestamps:true});

export const Testimonials = mongoose.model("Testimonials",testimonialsSchema);

