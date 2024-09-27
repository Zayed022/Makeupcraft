import { Router } from "express";
import {
    createService,
    getService,
    getServiceById,
    updateServiceById,
    deleteServiceById,
    addDescriptionsToServiceById,
    getDescriptionById
} from "../controllers/service.controller.js"
import { upload } from "../middlewares/multer.middleware.js";

const router=Router();
router.route("/create-service").post(
    upload.fields([
        {
            name: "thumbnail",
            maxCount: 1
        }
    ]),
    createService)

router.route("/get-service").get(getService)
router.route("/getservicebyid").get(getServiceById)
router.route("/update-service").post(updateServiceById)
router.route("/delete-service").post(deleteServiceById)
router.route("/add-description").post(addDescriptionsToServiceById)
router.route("/get-description").get(getDescriptionById)
export default router;
