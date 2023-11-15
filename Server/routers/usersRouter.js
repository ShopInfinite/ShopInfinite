const express = require("express");
const userController = require("../controllers/usersController");
const router = express.Router();

router.post("/signup",userController.signup);
router.post("/login",userController.login );
router.delete("/delete/:id",userController.deleteUser );
router.put("/updateUser/:id",userController.updateUser );

module.exports = router;