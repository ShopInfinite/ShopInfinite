const express = require("express");
const productsController = require("../controllers/productsController");

const router = express.Router();

const { images } = require("../middlewares/multer");

// Update routes to use the updated function for adding a product with an image
router.post("/addProduct", productsController.addProductWithImage);
router.put("/updateProduct/:product_id", productsController.updateProduct);
router.delete("/deleteProduct/:product_id", productsController.deleteProduct);
router.get("/getProduct/:product_id", productsController.getProduct);
router.get("/getAllProduct", productsController.getAllProduct);


module.exports = router;
