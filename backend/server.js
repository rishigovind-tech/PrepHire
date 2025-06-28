require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes=require("./routes/authRoute")
const sessionRoutes=require("./routes/sessionRoute")
const questionRoutes=require("./routes/questionRoute");
const { protect } = require("./middlewares/authMiddleware");
const { generateInterviewQuestion, generateConceptExplaination } = require("./controllers/aiController");
const { clerkWebhooks } = require("./controllers/webhooksjob");
const companyjobRoutes=require("./routes/companyjobRoute")
const jobRoute=require("./routes/jobRoute")
const userjobRoute=require("./routes/userjobRoute")
const {clerkMiddleware}=require("@clerk/express")




const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization","token","companytoken"],
  })
);

connectDB();

app.use(express.json());


// ---------------JOB MIDDLEWARE------------------------

app.use(clerkMiddleware())







// -----------------------------------------------------------

app.use("/api/auth", authRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/questions", questionRoutes);

app.use("/api/ai/generate-questions", protect, generateInterviewQuestion);
app.use("/api/ai/generate-explaination", protect, generateConceptExplaination);


// -------------JOB---------------------------

app.post('/webhooks',clerkWebhooks)

app.use('/api/company',companyjobRoutes)
app.use('/api/jobs',jobRoute)
app.use('/api/users/',userjobRoute)





// -------------------------------------------

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// app.use(express.static(path.join(__dirname,"../frontend/interview-prep-ai/dist")))


// app.get("*",(req,res)=>{
//   res.sendFile(path.join(__dirname,"../frontend/interview-prep-ai/dist/index.html"))
// })


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));

