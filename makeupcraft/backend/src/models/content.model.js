import mongoose,{Schema} from "mongoose"

const contentSchema = new Schema({
    content1:{
        type:String,
    },
    content2:{
        type:String,
    },
    content3:{
        type:String,
    },
    content4:{
        type:String,
    },
    content5:{
        type:String,
    },


},{timestamps:true});

export const Content = mongoose.model("Content",contentSchema);

