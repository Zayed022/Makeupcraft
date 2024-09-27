import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Service } from "../models/services.model.js";
import { Description } from "../models/description.model.js";

const publishDescriptions = asyncHandler(async(req,res)=>{
    const {description1, description2,description3,description4,description5,description6,price}=req.body
    if(!(description1||description2||description3||description4||description5||description6)){
        throw new ApiError(401,"All fields are required")
    }
    /*
    const existedDescription= await Description.findOne(
        {description1})
    })
    if(existedDescription){
        throw new ApiError(402,"Description already exists")
    }
        */
    
    const description = await Description.create({
        
        description1,
        description2,
        description3,
        description4,
        description5,
        description6,
        price,
        
    })
    const createdDescription= await Description.findById(description._id).select("")
    if(!createdDescription){
        throw new ApiError(403,"Something went wrong")
    }
    return res
    .status(201)
    .json(
        new ApiResponse (200),createdDescription,"Description created successfully!!"
    )

})

const getDescription = asyncHandler(async(req,res)=>{
    const description = await Description.find();
    res
    .status(200)
    .json(
        
        description,
        
    )
})

const deleteDescriptionById = asyncHandler(async(req,res)=>{
    const {id}=req.body;
    //console.log("1")
    const descriptionex =await Description.findById(id);
    //console.log(serivceex);
    if(!descriptionex){
        throw new ApiError(400,"Description not found")
    }
    await descriptionex.deleteOne();
    res
    .status(200)
    .json({
        success:true,
        message:"Description deleted successfully"
    })
})

export {
    publishDescriptions,
    getDescription,
    deleteDescriptionById,

}