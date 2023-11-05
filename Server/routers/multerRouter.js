// const express = require("express");
// const multerMiddleware = require("../middlewares/multer");
// const router = express.Router();
// const db = require("../models/db");

// // Define the insertImage function
// async function insertImage(image, product_id, imageIndex) {
//   try {
//     const query = `UPDATE product_images SET image${imageIndex} = $1 WHERE product_id = $2`;
//     const values = [image.buffer, product_id];

//     await db.query(query, values);
//   } catch (error) {
//     throw new Error("Error inserting image into the database: " + error);
//   }
// }

// // Define a route to upload the images to the database
// router.post(
//   "/uploadImages/:product_id",
//   multerMiddleware.upload.array("images", 3),
//   async (req, res) => {
//     try {
//       const product_id = req.params.product_id;
//       const images = req.files;

//       for (let i = 0; i < images.length; i++) {
//         // Set the image index
//         const imageIndex = i + 1;

//         // Insert the image into the database
//         await insertImage(images[i], product_id, imageIndex);
//       }

//       res.status(201).send("Images uploaded successfully");
//     } catch (error) {
//       console.error(error);
//       res.status(500).send("Error uploading the images");
//     }
//   }
// );

// module.exports = router;

const express = require("express");
const multerMiddleware = require("../middlewares/multer");
const router = express.Router();

router.post("/uploadImages/:product_id", multerMiddleware.uploadImages);
router.get("/getImages/:product_id", multerMiddleware.getImages);

module.exports = router;



