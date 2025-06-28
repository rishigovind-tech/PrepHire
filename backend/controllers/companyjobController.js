const Companyjob = require("../models/Companyjob");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");
const Job = require("../models/Job");
const JobApplication = require("../models/jobApplication");
const cloudinary = require("cloudinary").v2;

// register a new company

const registerCompany = async (req, res) => {
  const { name, email, password } = req.body;

  const imageFile = req.file;

  if (!name || !email || !password || !imageFile) {
    return res.json({ success: false, message: "Missing Details" });
  }

  try {
    const companyExists = await Companyjob.findOne({ email });

    if (companyExists) {
      return res.json({
        success: false,
        message: "Company already registered",
      });
    }

    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(password, salt);

    const imageUpload = await cloudinary.uploader.upload(imageFile.path);

    const company = await Companyjob.create({
      name,
      email,
      password: hashPassword,
      image: imageUpload.secure_url,
    });

    res.json({
      success: true,
      company: {
        _id: company._id,
        name: company.name,
        email: company.email,
        image: company.image,
      },
      token: generateToken(company._id),
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//company login

const loginCompany = async (req, res) => {
  const { email, password } = req.body;

  try {
    const company = await Companyjob.findOne({ email });

    if (!company) {
      return res.json({ success: false, message: "Invalid Email or Password" });
    }

    const isMatch = await bcrypt.compare(password, company.password);

    if (isMatch) {
      res.json({
        success: true,
        company: {
          _id: company._id,
          name: company.name,
          email: company.email,
          image: company.image,
        },
        token: generateToken(company._id),
      });
    } else {
      res.json({ success: false, message: "Invaild Email or Password" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//get company data

const getCompanyData = async (req, res) => {

  

  try {
    const company=req.company

    res.json({success:true,company})
  } catch (error) {
    res.json({success:false,message:error.message})
    
  }
};

//Post a new job

const postJob = async (req, res) => {
  const { title, description, location, salary,level,category } = req.body;

  const companyId = req.company._id;

  try {
    const newJob = new Job({
      title,
      description,
      location,
      salary,
      companyId,
      date:Date.now(),
      level,
      category
    });

    await newJob.save()


    res.json({success:true,newJob,message:"Job add successfully"})

  } catch (error) {

    res.json({success:false,message:error.message})
  }
};

//Get Company job Applicants
const getCompanyJobApplicants = async (req, res) => {};

//Get Company Posted Job

const getCompanyPostedJobs = async (req, res) => {

  try {

    const companyId=req.company._id


    const jobs=await Job.find({companyId})


    const jobsData=await Promise.all(jobs.map(async(job)=>{

      const applicants=await JobApplication.find({jobId:job._id})
      return {...job.toObject(),applicants:applicants.length}

    }))


    res.json({success:true,jobsData})

    
  } catch (error) {

    res.json({success:false,message:error.message})
    
  }
};

// Change Job Application Status

const ChangeJobApplicationsStatus = async (req, res) => {};

//change job visiblity

const changeVisiblity = async (req, res) => {

  try {

    const {id}=req.body

    const companyId =req.company._id

    const job=await Job.findById(id)

    if(companyId.toString() === job.companyId.toString()){
      job.visible = !job.visible
    }

    await job.save()

    res.json({success:true,job})
    
  } catch (error) {
    res.json({success:false,message:error.message})
    
  }




};

module.exports = {
  registerCompany,
  loginCompany,
  getCompanyData,
  postJob,
  getCompanyJobApplicants,
  getCompanyPostedJobs,
  ChangeJobApplicationsStatus,
  changeVisiblity,
};
