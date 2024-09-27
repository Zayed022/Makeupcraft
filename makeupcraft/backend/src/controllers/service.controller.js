import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Service } from "../models/services.model.js";
import { Description } from "../models/description.model.js";

const createService = asyncHandler(async(req,res)=>{
    const {title , price} = req.body
    
    if(!(title||price)){
        throw new ApiError(400,"All fields are required");
    }
    
    const existedService = await Service.findOne({title})
        
    
    if(existedService){
        throw new ApiError(409,"Service with title or description already exists");
    }
        
    //console.log(req.files);
    const thumbnailLocalPath = req.files?.thumbnail[0]?.path;
    //console.log(thumbnailLocalPath)
    if(!thumbnailLocalPath){
        throw new ApiError(400,"Thumbnail is required")
    }
    const thumbnail = await uploadOnCloudinary(thumbnailLocalPath)
    //console.log(thumbnail)
    if(!thumbnail){
        throw new ApiError(400,"Thumbnail is required")
    }
    
    const service = await Service.create({
        title,
        price,
        
        thumbnail:thumbnail.url,
        //lectures:lectures.url
        //numberOfLectures,
    })
    const createdService = await Service.findById(service._id).select(
        " "
    )
    if(!createdService){
        throw new ApiError(500,"Something went wrong")
    }
    return res
    .status(201).json(
        new ApiResponse(200,createdService,"Service created successfully!!")
    )
})

const getService = asyncHandler(async(req,res)=>{
    const service = await Service.find();
    res
    .status(200)
    .json(
        
        service,
        
    )
})

const getServiceById = asyncHandler(async(req,res)=>{
    const {serviceId}=req.body;
    const service = await Service.findById(serviceId)
    if(!service){
        throw new ApiError(401,"Service not found")
    }
    console.log(service)
    res.status(200)
    .json(new ApiResponse(
        200,
        service,
        "Service fetched successfully"
    ))
})

const updateServiceById = asyncHandler(async(req,res)=>{
    const {id} =req.body;

    const service = await Service.findByIdAndUpdate(
        id,
        {
            $set: req.body,
        },
        {
            runValidators:true
        }
    );
    if(!service){
        throw new ApiError(400,"Invalid service id or course not found. ")
    }
    res.status(200).json({
        success:true,
        message:"Service updated successfully",
    })
})

const deleteServiceById = asyncHandler(async(req,res)=>{
    const {id}=req.body;
    //console.log("1")
    const serviceex =await Service.findById(id);
    //console.log(serivceex);
    if(!serviceex){
        throw new ApiError(400,"Service not found")
    }
    await serviceex.deleteOne();
    res
    .status(200)
    .json({
        success:true,
        message:"Service deleted successfully"
    })
})

const addDescriptionsToServiceById= asyncHandler(async(req,res)=>{
    const {serviceId,descriptionId} =req.body;
    const service = await Service.findById(serviceId)
    if(!service){
        throw new ApiError(401,"Service not found")
    }
    //console.log(courseId)
    const description = await Description.findById(descriptionId)
    if(!description){
        throw new ApiError(402,"Description not found")
    }
    service.descriptions.push(description);
    await service.save();
    res.status(200)
    .json(new ApiResponse(200),
        service,
        "Notes added to course")
    
})

const getDescriptionById = asyncHandler(async(req,res)=>{
    const {descriptionId,serviceId}=req.body;
    const description = await Service.findById(descriptionId)
    if(!description){
        throw new ApiError(401,"Service not found")
    }
    console.log(description)
    res.status(200)
    .json(new ApiResponse(
        200,
        description,
        "Service fetched successfully"
    ))
})




export {
    createService,
    getService,
    getServiceById,
    updateServiceById,
    deleteServiceById,
    addDescriptionsToServiceById,
    getDescriptionById
}