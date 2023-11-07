// const multer = require("multer");

// // Set up Multer storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "images/"); // Directory to store uploaded files
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); // Keep the original file name
//   },
// });

// const upload = multer({ storage: storage });

const multer = require("multer");
const path = require("path");

// Set up Multer to handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/"); // Specify the upload directory
  },
  filename: (req, file, cb) => {
    const filename = Date.now() + path.extname(file.originalname);
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

module.exports = { upload };
