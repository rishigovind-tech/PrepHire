const express = require("express");
const streamifier = require("streamifier");

const {
  registerUser,
  loginUser,
  getuserProfile,
} = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");
const cloudinary = require("../config/cloudinaryConfig");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getuserProfile);

router.post("/upload-image", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file Uploaded" });
  }

  const stream = cloudinary.uploader.upload_stream((error, result) => {
    if (error) return res.status(500).json({ error });
    res.json({ imageUrl: result.secure_url });
  });

  streamifier.createReadStream(req.file.buffer).pipe(stream);


  
});

module.exports = router;
