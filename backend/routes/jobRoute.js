const express = require("express");
const { getJobs, getJobById } = require("../controllers/jobController");


const router=express.Router()

//Route to get all jobs data

router.get('/',getJobs)


//Route to get a single job

router.get('/:id',getJobById)









module.exports = router;