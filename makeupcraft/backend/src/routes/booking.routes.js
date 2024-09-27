import { Router } from "express";
import { getAvailability,bookSlot,confirmPayment,pay, } from "../controllers/booking.controller.js";

const router=Router();


router.route("/check-availability").get(getAvailability)
router.route("/book-slot").post(bookSlot)
router.route("/pay").post(pay);
router.route("/verify-payment").post(confirmPayment)

export default router