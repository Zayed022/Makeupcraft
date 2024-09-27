import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Course } from "../models/course.model.js";
import { Content } from "../models/content.model.js";

const createCourse = asyncHandler(async(req,res)=>{
    const {title , price} = req.body
    
    if(!(title||price)){
        throw new ApiError(400,"All fields are required");
    }
    
    const existedCourse = await Course.findOne({title})
        
    
    if(existedCourse){
        throw new ApiError(409,"Course with title or description already exists");
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
    
    const course = await Course.create({
        title,
        price,
        thumbnail:thumbnail.url,
        //lectures:lectures.url
        //numberOfLectures,
    })
    const createdCourse = await Course.findById(course._id).select(
        " "
    )
    if(!createdCourse){
        throw new ApiError(500,"Something went wrong")
    }
    return res
    .status(201).json(
        new ApiResponse(200,createdCourse,"Course created successfully!!")
    )
})

const getCourse = asyncHandler(async(req,res)=>{
    const course = await Course.find();
    res
    .status(200)
    .json(
        
        course,
        
    )
})

const getCourseById = asyncHandler(async(req,res)=>{
    const {courseId}=req.body;
    const course = await Course.findById(courseId)
    if(!course){
        throw new ApiError(401,"COurse not found")
    }
    console.log(course)
    res.status(200)
    .json(new ApiResponse(
        200,
        course,
        "Course fetched successfully"
    ))
})

const updateCourseById = asyncHandler(async(req,res)=>{
    const {id} =req.body;

    const course = await Course.findByIdAndUpdate(
        id,
        {
            $set: req.body,
        },
        {
            runValidators:true
        }
    );
    if(!course){
        throw new ApiError(400,"Invalid course id or course not found. ")
    }
    res.status(200).json({
        success:true,
        message:"Course updated successfully",
    })
})

const deleteCourseById = asyncHandler(async(req,res)=>{
    const {id}=req.body;
    console.log("1")
    const courseex =await Course.findById(id);
    console.log(courseex);
    if(!courseex){
        throw new ApiError(400,"COurse not found")
    }
    await courseex.deleteOne();
    res
    .status(200)
    .json({
        success:true,
        message:"Course deleted successfully"
    })
})

export{
    createCourse,
    getCourse,
    getCourseById,
    updateCourseById,
    deleteCourseById,
}