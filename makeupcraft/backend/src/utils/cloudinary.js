import {v2 as cloudinary} from 'cloudinary'
import fs from "fs"


const uploadOnCloudinary = async (localFilePath )=>{
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME ,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        //secure:true,
        //cloudinary_url: process.env.CLOUDINARY_URL
    });
    try{
        //console.log("1")
        if(!localFilePath) return null
        //upload on cloudinary
        //console.log(localFilePath)
        
        const response = await cloudinary.uploader
        .upload(localFilePath, {
            resource_type: "auto"
        })
        //console.log(response)
        //console.log("file is updated on cloudinary",response.url);
        fs.unlinkSync(localFilePath)
        return response;
    }
    catch(error){
        fs.unlinkSync(localFilePath)
        return null;
    }
}

export  {uploadOnCloudinary};
