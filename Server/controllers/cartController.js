const db = require("../models/db");

async function addToCart(req, res) {
  const product_id = req.params.product_id;
  const user_id = req.params.user_id;
  const { quantity } = req.body;

  try {
    // Check if the item already exists in the cart
    const existingCartItem = await db.query(
      `
      SELECT quantity
      FROM cart
      WHERE product_id = $1 AND user_id = $2
      `,
      [product_id, user_id]
    );

    let updatedQuantity = quantity;

    if (existingCartItem.rows.length > 0) {
      // If the item exists, add the old quantity to the new quantity
      updatedQuantity += existingCartItem.rows[0].quantity;

      const result = await db.query(
        `
        UPDATE cart
        SET quantity = $1
        WHERE product_id = $2 AND user_id = $3
        RETURNING *
        `,
        [updatedQuantity, product_id, user_id]
      );

      const addedItem = {
        quantity: updatedQuantity,
        product_id,
        user_id,
        product_name: result.rows[0].product_name,
        product_description: result.rows[0].product_description,
      };

      return res.status(200).json(addedItem);
    } else {
      // If the item doesn't exist, insert it into the cart
      const productNameResult = await db.query(
        `
        SELECT product_name, product_description
        FROM products
        WHERE product_id = $1
        `,
        [product_id]
      );

      if (productNameResult.rows.length === 0) {
        return res.status(400).json({ error: "Product not found" });
      }

      const result = await db.query(
        `
        INSERT INTO cart (product_id, user_id, quantity)
        VALUES($1, $2, $3)
        RETURNING *
        `,
        [product_id, user_id, updatedQuantity]
      );

      if (!result || !result.rows || result.rows.length === 0) {
        throw new Error("Failed to insert into shopping_cart");
      }

      const addedItem = {
        quantity: updatedQuantity,
        product_name: productNameResult.rows[0].product_name,
        product_description: productNameResult.rows[0].product_description,
        user_id,
        product_id,
      };

      return res.status(201).json(addedItem);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to add/update the shopping cart item" });
  }
}




const updateCart = async (req, res) => {
  const product_id = req.params.product_id;
  const user_id = req.params.user_id;
  const quantity = req.body.quantity;

  try {
    const result = await db.query(
      `UPDATE cart
      SET quantity = $1
      WHERE product_id = $2 AND user_id = $3
      RETURNING *`,
      [quantity, product_id, user_id]
    );

    if (result.rowCount === 0) {
      return res
        .status(400)
        .json({ error: "Failed to update the shopping cart item" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update the shopping cart item" });
  }
};

const deleteProduct = async (req, res) => {
  const product_id = req.params.product_id;
  const user_id = req.params.user_id;

  try {
    const result = await db.query(
      `
      DELETE FROM cart
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

    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete the shopping cart item" });
  }
};






const getCarts = async (req, res) => {
  const user_id = req.params.user_id;

  try {
    const result = await db.query(
      `SELECT products.product_name,
      products.product_description,
      products.product_price,
      cart.quantity
      FROM products
      INNER JOIN cart ON products.product_id = cart.product_id
       WHERE cart.user_id = $1
      `,
      [user_id]
    );

    if (result.rowCount === 0) {
      return res
        .status(400)
        .json({ error: "Failed to GET the carts item" });
    }

    res.status(200).json(result.rows); // Return the rows as the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get the shopping cart items" });
  }
};








module.exports = {
  addToCart,
  updateCart,
  deleteProduct,
  getCarts
};
