import dotenv from "dotenv"
import { app } from "./app.js";
import cors from "cors"

import connectDB from "./db/index.js";
app.use(cors())
dotenv.config({
    path:'./.env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 5000 , ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed!!!",err);
})