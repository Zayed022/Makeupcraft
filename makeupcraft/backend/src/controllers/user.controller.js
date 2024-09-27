import {ApiResponse} from "../utils/ApiResponse.js";
import {uploadOnCloudinary} from '../utils/cloudinary.js'
//import {asyncHandler} from "../utils/asyncHandler.js";
import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from '../utils/ApiError.js';
import jwt from 'jsonwebtoken';
import {User} from '../models/user.model.js';
import mongoose from "mongoose";
import path from "path"
import nodemailer from "nodemailer"

const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}

const register = asyncHandler(async(req,res)=>{
    const {fullName,email,username,password} = req.body
    
    if([fullName,email,username,password].some((field)=>field?.trim()==="")){
        throw new ApiError(400,"All fields are required")
    }
    const userExists = await User.findOne({
        $or:[{email},{username}]
    })
    if(userExists){
        throw new ApiError(409,"User with email or username already exists")
    }
    //console.log(req.files)
    
    
        
    const user= await User.create({
        fullName,
        //avatar: avatar.url,
        email,
        password,
        username:username.toLowerCase()
    })
    const createdUser = await User.findById(user._id).select("-password -refreshToken")
    if(!createdUser) {
        throw new ApiError(500,"Something went wrong while registering user")
    }
    return res.status(201).json(new ApiResponse(201,
       { _id:user._id,
        fullName:user.fullName,
        email:user.email,
       },
       "User created Successfully"


    ))
})

const loginUser = asyncHandler(async(req,res)=>{
    const{email,password,username}=req.body
    if(!(email || password||username)){
        throw new ApiError(401,"Email and password is  required")
    }
    const user = await User.findOne({email})
    
    if(!user){
        throw new ApiError(402,"user does not exist")
    }
    const isPasswordValid = await user.isPasswordCorrect(password)
    if(!isPasswordValid){
        throw new ApiError(403,"Invalid user credentials")
    }
    const {accessToken,refreshToken}=await generateAccessAndRefereshTokens(user._id)
   
    const loggedInUser=await User.findById(user._id).select("-password ")
    
    const options={
        httpOnly:true,
        secure:true
    }
        
    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json
    (new ApiResponse
        (200,
            {loggedInUser,accessToken,refreshToken},
            "User logged In Successfully!!!"))
})

const logoutUser= asyncHandler(async(req,res)=>{
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset:{
                refreshToken:1 //removes field from document
            }
        },
        {
            new :true
        }
    )
    const options={
        httpOnly:true,
        secure:true
    }
    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(new ApiResponse(200,{},"User logged Out!"))
})

const refreshAccessToken = asyncHandler(async(req,res)=>{
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if(!incomingRefreshToken) {
        throw new ApiError(401,"Unauthorized Request")
    }
    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
    
        const user = await User.findById(decodedToken?._id)
    
        if (!user) {
            throw new ApiError(401, "Invalid refresh token")
        }
    
        if (incomingRefreshToken !== user?.refreshToken) {
            throw new ApiError(401, "Refresh token is expired or used")
            
        }
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const {accessToken, newRefreshToken} = await generateAccessAndRefereshTokens(user._id)
    
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(
                200, 
                {accessToken, refreshToken: newRefreshToken},
                "Access token refreshed"
            )
        )
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token")
    }

})

const getLoggedInUserDetails = asyncHandler(async(req,res)=>{
    //console.log("1");
    return res
    .status(200)
    .json(new ApiResponse(
        200,
        req.user,
        "User fetched successfully"
    ))
})

const changeCurrentPassword = asyncHandler(async(req,res)=>{
    const {oldPassword,newPassword}= req.body;
    console.log("1")

    const user = await User.findById(req.user?._id)
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)
    if(!isPasswordCorrect){
        throw new ApiError(400,"Invalid old password")
    }
    user.password =newPassword 
    await user.save({validateBeforeSave:false})
    return res
    .status(200)
    .json(new ApiResponse(200,{},"Password changed successfully"))
})

const contactUs=asyncHandler(async(req,res)=>{
    const {name,email,subject,message}=req.body;
    if(!name || !email || !subject ||!message){
        throw new ApiError(400,"All fields are required")
    }
    try{
        const transporter= nodemailer.createTransport({
            service:'Gmail',
            auth:{
                user:process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions={
            from :email,
            to:process.env.EMAIL,
            subject:`COntact Us Form: ${subject}`,
            text:`
            Name: ${name}
            Email: ${email}
            Subject:${subject}
            Message:${message}
            `,
        };
        await transporter.sendMail(mailOptions);
        return res.status(200).
        json(new ApiResponse(200,{},"Message Sent Successfully"));

    }
    catch(error){
        console.error("Error sending email : ",error);
        return res.status(500).
        json(new ApiResponse(500,{},"Failed to send message"));
    }
});

export {
    register,
    loginUser,
    logoutUser,
    refreshAccessToken,
    getLoggedInUserDetails,
    changeCurrentPassword,
    contactUs,
    //updateAccountDetails,
    //updateavatar,
};