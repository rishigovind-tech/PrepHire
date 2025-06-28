// Get all Job

const Job = require("../models/Job");

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ visible: true }).populate({
      path: "companyId",
      select: "-password",
    });

    res.json({ success: true, jobs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//Get a single job by id

const getJobById = async (req, res) => {
  try {
    const { id } = req.params;

    const job = await Job.findById(id).populate({
      path: "companyId",
      select: "-password",
    });

    if (!job) {
      return res.json({ success: false, message: "Job Not Found" });
    }

    res.json({ success: true, job });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

module.exports = {
  getJobs,
  getJobById,
};
