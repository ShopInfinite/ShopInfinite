const express = require("express");
const paymentsController = require("../controllers/paymentController");
const router = express.Router();

router.post("/charge", paymentsController.newPayment);
router.get("/payments", paymentsController.getPayments);

router.get("/paymentidUser/:userid", paymentsController.getPaymentByUserId);
router.get("/paymentid/:payment_id", paymentsController.getPaymentById);

router.delete("/delete/:payment_id", paymentsController.deletePaymentById);

module.exports = router;