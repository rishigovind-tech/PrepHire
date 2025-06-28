

const express = require("express");
const {
  registerCompany,
  loginCompany,
  getCompanyData,
  postJob,
  getCompanyJobApplicants,
  getCompanyPostedJobs,
  ChangeJobApplicationsStatus,
  changeVisiblity,
} = require("../controllers/companyjobController");
const { default: upload } = require("../config/multer");
const { protectCompany } = require("../middlewares/authjobMiddleware");

const router = express.Router();

//Register a comapny

router.post("/register",upload.single('image'), registerCompany);

//Company login
router.post("/login", loginCompany);

//Get company data
router.get("/company",protectCompany, getCompanyData);

//Post a job
router.post("/post-job",protectCompany, postJob);

//Get Applicants Data of Comapny
router.get("/applicants",protectCompany, getCompanyJobApplicants);

//Get Comapny Job List
router.get("/list-jobs",protectCompany, getCompanyPostedJobs);

//Change Applications Status
router.post("/change-status", ChangeJobApplicationsStatus);

//Change applications Visiblity
router.post("/change-visiblity",protectCompany, changeVisiblity);

module.exports=router;
