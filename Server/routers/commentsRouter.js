const express = require("express");
const commentsController = require("../controllers/commentsController");
const router = express.Router();

router.post("/addComment/:product_id/:user_id", commentsController.addComment);

router.put("/updateComment/:product_id/:user_id", commentsController.updateComment);
router.delete("/deleteComment/:product_id/:comment_id", commentsController.deleteComment);
router.get("/getComments/:user_id",commentsController.getComments);

module.exports = router;
