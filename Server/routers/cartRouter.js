const express = require("express");
const cartController = require("../controllers/cartController");
// const authorizationMiddleware = require("../middlewares/authorization");
const router = express.Router();

router.post(
  "/addToCart/:product_id/:user_id",
  // authorizationMiddleware.authorize,
  cartController.addToCart
);
router.put(
  "/updateCart/:product_id/:user_id",
  // authorizationMiddleware.authorize,
  cartController.updateCart
);
router.delete(
  "/deleteCart/:product_id/:user_id",
  // authorizationMiddleware.authorize,
  cartController.deleteProduct
);
router.get(
  "/getProductsFromCart/:product_id/:user_id",
  // authorizationMiddleware.authorize,
  cartController.getProductsFromCart
);

module.exports = router;
