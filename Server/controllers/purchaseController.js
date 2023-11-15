const db = require("../models/db");

const addPurchase = async (req, res) => {
  const user_id = req.params.id;

  const { product_id } = req.body;

  try {
    const insertQuery = `SELECT user_id, product_id 
        FROM cart 
        INNER JOIN users ON user_products.user_id = users.user_id
        INNER JOIN products ON user_products.product_id = products.product_id`;

    const insertValues = [user_id, product_id, quantity];

    const result = await db.query(insertQuery, insertValues);
    const newProductId = result.rows[0].product_id;
    res.status(201).json({
      message: "Product added to cart successfully",
      product_id: newProductId,
    });
  } catch (error) {
    console.error("Failed to add the product: ", error);
    res.status(500).json({ error: "Failed to add the product to cart" });
  }
};

module.exports = {
  addPurchase,
};
