const mongoose = require("mongoose");


const JobApplicationSchema=new mongoose.Schema({
    userId:{type:String,ref:'UserJob',required:true},
    companyId:{type:mongoose.Schema.Types.ObjectId,ref:'Companyjob',required:true},
    jobId:{type:mongoose.Schema.Types.ObjectId,ref:'Job',required:true},
    status:{type:String,default:'Pending'},
    date:{type:Number,required:true}


})

const JobApplication=mongoose.model('JobApplication',JobApplicationSchema)

module.exports=JobApplication;
