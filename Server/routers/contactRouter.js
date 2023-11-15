const express = require("express");
const contactController = require("../controllers/contactController");
const router = express.Router();

router.post("/addContact", contactController.addContact);
// router.put("/updateProduct/:product_id", productsController.updateProduct);
// router.delete("/deleteProduct/:product_id", productsController.deleteProduct);
// router.get("/getProduct/:product_id", productsController.getProduct);

module.exports = router;
