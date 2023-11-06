const express = require("express");
const multer = require("multer");
const productsController = require("../controllers/productsController");
const upload = multer({ dest: "uploads/" }); // Set the destination folder


const router = express.Router();

// router.post("/addProduct", productsController.addProduct);
router.post("/addProduct", upload.array("product_images", 3), productsController.addProduct);
router.put("/updateProduct/:product_id", productsController.updateProduct);
router.delete("/deleteProduct/:product_id", productsController.deleteProduct);
router.get("/getProduct/:product_id", productsController.getProduct);
router.get("/getAllProduct/", productsController.getAllProduct);

module.exports = router;
