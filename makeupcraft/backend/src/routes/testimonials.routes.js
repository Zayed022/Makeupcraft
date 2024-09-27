import { Router } from "express";

import {
    createTestimonials,
    getTestimonials
}  from "../controllers/testimonials.controller.js"

const router=Router()

router.route("/create-testimonials").post(createTestimonials)
router.route("/get-testimonials").get(getTestimonials)


export default router;