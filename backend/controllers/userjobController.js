const Job = require("../models/Job");
const JobApplication = require("../models/jobApplication");
const UserJob = require("../models/UserJob");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");

//Get user data
const getUserData = async (req, res) => {
  const userId = req.auth.userId;

  try {
    const user = await UserJob.findById(userId);

    if (!user) {
      res.json({ success: false, message: "User not found" });
    }

    res.json({ success: true, user });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//Apply for a job

const applyForJob = async (req, res) => {
  const { jobId } = req.body;

  const userId = req.auth.userId;

  try {
    const isAlreadyApplied = await JobApplication.find({ jobId, userId });

    if (isAlreadyApplied.length > 0) {
      return res.json({ success: false, message: "Already Applied" });
    }

     const jobData = await Job.findById(jobId); //--------------

    if (!jobData) {
      return res.json({ success: false, message: "Job Not Found" });
    }

    await JobApplication.create({
      companyId: jobData.companyId,
      userId,
      jobId,
      date: Date.now(),
    });

    res.json({ success: true, message: "Applied to the job successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get user applied applications

const getUserJobapplication = async (req, res) => {
  try {
    const userId = req.auth.userId;

    const applications = await JobApplication.find({ userId })
      .populate("companyId", "name email image")
      .populate("jobId", "title description location category level salary")
      .exec();

    if (!applications) {
      return res.json({ success: false, message: "No job application found" });
    }

    return res.json({ success: true, applications });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//Update user profile
const updateResume = async (req, res) => {
  try {
    console.log("Received file:", req.file);
    const userId = req.auth.userId;
    const resumeFile = req.file;

    const userData = await UserJob.findById(userId);

    // if (resumeFile) {
    //   const resumeUpload = await cloudinary.uploader.upload(resumeFile.path);
    //   userData.resume = resumeUpload.secure_url;
    // }

    // await userData.save();

    // res.json({ success: true, message: "Resume Updated" });

    if (resumeFile) {
      const uploadStream = cloudinary.uploader.upload_stream(
        { resource_type: "raw" },
        async (error, result) => {
          if (error) {
            return res
              .status(500)
              .json({ success: false, message: error.message });
          }

          userData.resume = result.secure_url;
          await userData.save();

          res.json({ success: true, message: "Resume Updated" });
        }
      );

      streamifier.createReadStream(resumeFile.buffer).pipe(uploadStream);
    } else {
      res.status(400).json({ success: false, message: "No file uploaded" });
    }


    // ---------------------------
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

module.exports = {
  getUserData,
  applyForJob,
  getUserJobapplication,
  updateResume,
};
