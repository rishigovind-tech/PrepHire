const jwt =require("jsonwebtoken")
const Companyjob=require("../models/Companyjob")

const protectCompany=async(req,res,next)=>{

    const token=req.headers.token

    
    

    if(!token){        
        return res.json({success:false,message:"Not authorized,Login Again"})
    }

    try {

        const decoded=jwt.verify(token,process.env.JWT_SECRET)

        req.company=await Companyjob.findById(decoded.id).select('-password')

        next()
        
    } catch (error) {

        res.json({success:false,message:error.message})
        
    }

}





module.exports = { protectCompany };