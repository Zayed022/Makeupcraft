import {Router} from "express";

//import {upload} from "../middlewares/multer.middleware.js";
import { register,
    loginUser,
    logoutUser,
    refreshAccessToken,
    getLoggedInUserDetails,
    changeCurrentPassword,
    contactUs
    //updateAccountDetails, 
    //updateavatar,
    } from "../controllers/user.controller.js";
import {verifyJWT} from "../middlewares/auth.middleware.js"
const router = Router();

router.route("/register").post(register),


router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT,logoutUser)
router.route("/refresh-token").post(verifyJWT, refreshAccessToken);
router.route("/user-details").get(verifyJWT, getLoggedInUserDetails)
router.route("/change-password").post(verifyJWT,changeCurrentPassword)
//router.route("/update-account").patch(verifyJWT,updateAccountDetails)
//router.route("/update-avatar").post(verifyJWT,updateavatar)
router.route("/contact-us").post(contactUs)
export default router;