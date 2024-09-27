import { Router } from "express";
import {
    publishDescriptions,
    getDescription,
    deleteDescriptionById
} from "../controllers/description.controller.js"
const router= Router();

router.route("/create-description").post(publishDescriptions)
router.route("/get-description").get(getDescription)
router.route("/delete-description").post(deleteDescriptionById)

export default router;