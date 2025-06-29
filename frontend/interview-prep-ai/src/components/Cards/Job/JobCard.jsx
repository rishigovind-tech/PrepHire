import React from "react";
import { assets } from "../../../assets/assets";
import { useNavigate } from "react-router-dom";


const JobCard = ({ job }) => {

  const navigate = useNavigate()

  return (
    <div className=" border border-gray-300 p-6 shadow rounded-xl">
      <div className="flex justify-between items-center">
        <img className="h-8" src={job.companyId.image} alt="" />
      </div>
      <h4 className=" font-medium text-xl mt-2">{job.title}</h4>
      <div className="flex items-center gap-3 mt-2 text-xs">
        <span className=" bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">{job.location}</span>
        <span className=" bg-red-50 border border-red-200 px-4 py-1.5 rounded">{job.level}</span>
      </div>
      <p className=" text-gray-500 text-sm mt-4 text-justify" dangerouslySetInnerHTML={{__html:job.description.slice(0,150)}}></p>
        <div className="mt-4 flex  gap-4 text-sm ">
            <button onClick={()=> {navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className="bg-orange-400  text-white px-4 py-2 rounded-xl hover:bg-yellow-100 hover:text-black border border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer">Apply Now</button>
            <button onClick={()=> {navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className="border border-orange-400 text-gray-600 px-4 py-2 rounded-xl hover:text-black hover:border-yellow-300 transition-colors cursor-pointer">Learn More</button>
        </div>

     
    </div>
  );
};

export default JobCard;
