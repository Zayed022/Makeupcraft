import {ApiResponse} from "../utils/ApiResponse.js";
import {uploadOnCloudinary} from '../utils/cloudinary.js'
//import {asyncHandler} from "../utils/asyncHandler.js";
import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from '../utils/ApiError.js';
import { Testimonials } from "../models/testimonials.model.js";

const createTestimonials = asyncHandler(async(req,res)=>{
    const {title , feedback} = req.body
    
    if(!(title||feedback)){
        throw new ApiError(400,"All fields are required");
    }
    
    const existedTestimonials = await Testimonials.findOne({title})
        
    
    if(existedTestimonials){
        throw new ApiError(409,"Service with title or description already exists");
    }
    
    const testimonials = await Testimonials.create({
        title,
        feedback
  
    })
    const createdTestimonials = await Testimonials.findById(testimonials._id).select(
        " "
    )
    if(!createdTestimonials){
        throw new ApiError(500,"Something went wrong")
    }
    return res
    .status(201).json(
        new ApiResponse(200,createdTestimonials,"Service created successfully!!")
    )
})

const getTestimonials = asyncHandler(async(req,res)=>{
    const testimonials = await Testimonials.find();
    res
    .status(200)
    .json(
        
        testimonials,
        
    )
})

export{
    createTestimonials,
    getTestimonials,

}
