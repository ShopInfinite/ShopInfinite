async function addContact(req, res) {
    const {
        comment_content,
        comment_rate
    } = req.body;
  
    try {
        const db = require("../models/db");

        const insertQuery = `INSERT INTO comments (
            "comment_content",
            "comment_rate"
          )
          VALUES ($1, $2)
          RETURNING product_id`;
  
      const insertValues = [
        comment_content,
        comment_rate
      ];
      const result = await db.query(insertQuery, insertValues);
      const newProductId = result.rows[0].product_id;
      res.status(201).json({
        message: "CommentContact added successfully",
        product_id: newProductId,
      });
    } catch (error) {
      console.error("Failed to add the CommentContact: ", error);
      res.status(500).json({ error: "Failed to add the CommentContact" });
    }
  }




  module.exports = {
    addContact
  };