const db = require("../models/db");

async function addComment(req, res) {
  const product_id = req.params.product_id;
  const user_id = req.params.user_id;
  const { comment_content, comment_rate } = req.body;

  try {
    const productNameResult = await db.query(
      `
      SELECT product_name FROM products 
      WHERE product_id = $1     
      `,
      [product_id]
    );

    const result = await db.query(
      `
        INSERT INTO comments (comment_content, comment_rate, product_id, user_id)
        VALUES($1, $2, $3, $4)
        RETURNING *
        `,
      [comment_content, comment_rate, product_id, user_id]
    );

    if (!result || !result.rows || result.rows.length === 0) {
      throw new Error("Failed to insert into shopping_cart");
    }

    const userInfoResult = await db.query(
      `
        SELECT fistname, lastname
        FROM users
        WHERE user_id = $1
        `,
      [user_id]
    );

    const addedComment = {
      fistname: userInfoResult.rows[0].fistname,
      lastname: userInfoResult.rows[0].lastname,
      product_name: productNameResult.rows[0].product_name,
      comment_content,
      comment_rate,
    };

    return res.status(201).json(addedComment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to add a comment" });
  }
}

const updateComment = async (req, res) => {
  const product_id = req.params.product_id;
  const user_id = req.params.user_id;
  const { comment_content, comment_rate } = req.body;

  try {
    const result = await db.query(
      `UPDATE comments
        SET comment_content = $1, comment_rate = $2
        WHERE product_id = $3 AND user_id = $4
        RETURNING *`,
      [comment_content, comment_rate, product_id, user_id]
    );

    if (result.rowCount === 0) {
      return res.status(400).json({ error: "Failed to update the comment" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update the comment" });
  }
};

const deleteComment = async (req, res) => {
  const product_id = req.params.product_id;
  const user_id = req.params.user_id;

  try {
    const result = await db.query(
      `
        DELETE FROM comments
        WHERE product_id = $1 AND user_id = $2
        RETURNING *
        `,
      [product_id, user_id]
    );

    if (result.rowCount === 0) {
      return res
        .status(400)
        .json({ error: "Failed to delete the shopping cart item" });
    }

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete the comment" });
  }
};

module.exports = {
  addComment,
  updateComment,
  deleteComment,
};
