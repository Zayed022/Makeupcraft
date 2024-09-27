import { Router } from "express";
import {createCourse,
    getCourse,
    
    updateCourseById,
    deleteCourseById ,
    //addNotesToCourseById ,
    getCourseById ,
    
} from "../controllers/course.controller.js"
import { upload } from "../middlewares/multer.middleware.js";


const router = Router()

router.route("/create-course").post(
    upload.fields([
        {
            name: "thumbnail",
            maxCount: 1
        }
    ]),
    createCourse)
router.route("/getCourse").get(getCourse)
//router.route("/lectures-id").get(getlecturesByCourseId)
//router.route("/add").post(
    
  //  addLecturesToCourseById )
router.route("/update-course").post(updateCourseById)
router.route("/deleteCourse").post(deleteCourseById )
//router.route("/add-notes").post(
    
    
  //  addNotesToCourseById )
router.route("/:id").get(getCourseById)
//router.route("/remove-lecture").post(removeLectureFromPlaylist)
//router.route("/remove-notes").post(removeNotesFromPlaylist)
//router.route("/add-assignment").post(addAssignmentsToCourseById)
//router.route("/remove-assignment").post(removeAssignmentFromPlaylist)
export default router;