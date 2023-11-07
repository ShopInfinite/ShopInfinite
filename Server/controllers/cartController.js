const db = require("../models/db");

async function addToCart(req, res) {
  const product_id = req.params.product_id;
  const user_id = req.params.user_id;
  const { quantity } = req.body;

  try {
    const productNameResult = await db.query(
      `
      SELECT product_name, product_description, product_image
      FROM products 
      WHERE product_id = $1
      `,
      [product_id]
    );

    const result = await db.query(
      `
      INSERT INTO cart (product_id, user_id, quantity)
      VALUES($1, $2, $3)
      RETURNING *
      `,
      [product_id, user_id, quantity]
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

    const addedItem = {
      quantity,
      product_name: productNameResult.rows[0].product_name,
      product_description: productNameResult.rows[0].product_description,
      fistname: userInfoResult.rows[0].fistname,
      lastname: userInfoResult.rows[0].lastname,
      image1: productNameResult.rows[0].image1,
    };

    return res.status(201).json(addedItem);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Failed to insert into shopping_cart" });
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

const getProductsFromCart = async (req, res) => {
  try {
    const result = await getAllProductFromDatabase();
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({ error: "Get Product failed" });
  }
};

async function getAllProductFromDatabase() {
  const queryText = `
      SELECT product_image, product_name, product_size, product_price, quantity 
      FROM products
      INNER JOIN cart ON prducts.product_id = cart.product_id;
    `;
  console.log(queryText);

  try {
    const result = await db.query(queryText); // Assuming you have a database connection named 'db'
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addToCart,
  updateCart,
  deleteProduct,
  getProductsFromCart,
};
