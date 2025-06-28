
const express = require("express");
const { applyForJob, getUserData, getUserJobapplication, updateResume } = require("../controllers/userjobController");
const upload = require("../middlewares/uploadMiddleware");


const router = express.Router();

//Get user data

router.get('/user',getUserData)

//Apply for a job
router.post('/apply',applyForJob)

//Get applied jobs data

router.get('/application',getUserJobapplication)

//Update user profile 

router.post('/update-resume',upload.single('resume'),updateResume)



module.exports=router;