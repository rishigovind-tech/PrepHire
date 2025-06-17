const multer = require("multer");

const storage = multer.memoryStorage();


// {
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// }

// const filefilter = (req, file, cb) => {
//   const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only .jpeg,.jpg and .png format are allowed"), false);
//   }
// };

const upload =
  multer (
  {
    storage,
    // filefilter,
  });

module.exports = upload;
