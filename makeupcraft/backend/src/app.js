import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"

const app = express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(cors())
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"20mb"}))
app.use(express.static("public"));
app.use(cookieParser())

import userRoute from './routes/user.routes.js'
app.use("/api/v1/users",userRoute);

import courseRoute from './routes/course.routes.js'
app.use("/api/v1/courses",courseRoute);

import serviceRoute from './routes/service.routes.js'
app.use("/api/v1/services",serviceRoute);

import descriptionRoute from './routes/description.routes.js'
app.use("/api/v1/description",descriptionRoute);

import testimonialsRoute from './routes/testimonials.routes.js'
app.use("/api/v1/testimonials",testimonialsRoute);

import paymentRoute from './routes/payment.routes.js'
app.use("/api/v1/payment",paymentRoute);

import bookingRoute from './routes/booking.routes.js'
app.use("/api/v1/booking",bookingRoute);



export {app}