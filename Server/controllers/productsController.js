const db = require("../models/db");

//* Add Products
async function addProduct(req, res) {
  const {
    product_name,
    product_description,
    product_subDescription,
    product_price,
    product_type,
    product_target,
    product_rate,
    product_size,
    product_fabricType,
    product_origin,
  } = req.body;

  try {
    const insertQuery = `INSERT INTO products (
          "product_name",
          "product_description",
          "product_subDescription",
          "product_price",
          "product_type",
          "product_target",
          "product_rate",
          "product_size",
          "product_fabricType",
          "product_origin"
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        RETURNING product_id`;

    const insertValues = [
      product_name,
      product_description,
      product_subDescription,
      product_price,
      product_type,
      product_target,
      product_rate,
      product_size,
      product_fabricType,
      product_origin,
    ];
    const result = await db.query(insertQuery, insertValues);
    const newProductId = result.rows[0].product_id;
    res.status(201).json({
      message: "Product added successfully",
      product_id: newProductId,
    });
  } catch (error) {
    console.error("Failed to add the product: ", error);
    res.status(500).json({ error: "Failed to add the product" });
  }
}

//* Update Products
const updateProduct = async (req, res) => {
  const product_id = req.params.product_id;
  const {
    product_name,
    product_description,
    product_subDescription,
    product_price,
    product_type,
    product_target,
    product_rate,
    product_size,
    product_fabricType,
    product_origin,
  } = req.body;

  try {
    const result = await updateProductInDatabase(
      product_id,
      product_name,
      product_description,
      product_subDescription,
      product_price,
      product_type,
      product_target,
      product_rate,
      product_size,
      product_fabricType,
      product_origin
    );
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({ error: "Update Product failed" });
  }
};

async function updateProductInDatabase(
  product_id,
  product_name,
  product_description,
  product_subDescription,
  product_price,
  product_type,
  product_target,
  product_rate,
  product_size,
  product_fabricType,
  product_origin
) {
  const queryText = `
      UPDATE products 
       SET "product_name" = $2,
           "product_description" = $3,
           "product_subDescription" = $4,
           "product_price" = $5,
           "product_type" = $6,
           "product_target" = $7,
           "product_rate" = $8,
           "product_size" = $9,
           "product_fabricType" = $10,
           "product_origin" = $11
       WHERE "product_id" = $1`;
  const values = [
    product_id,
    product_name,
    product_description,
    product_subDescription,
    product_price,
    product_type,
    product_target,
    product_rate,
    product_size,
    product_fabricType,
    product_origin,
  ];
  return db.query(queryText, values);
}

//* Delete product
const deleteProduct = async (req, res) => {
  const product_id = req.params.product_id;
  try {
    const result = await deleteProductInDatabase(product_id);
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({ error: "Delete Product failed" });
  }
};

async function deleteProductInDatabase(product_id) {
  const queryText = "DELETE FROM products WHERE product_id = $1";
  const values = [product_id];
  return db.query(queryText, values);
}

const getProduct = async (req, res) => {
  const product_id = req.params.product_id;
  try {
    const getQuery = `
    SELECT products.product_id, product_name, product_subDescription, product_price, image1 
    FROM products
    INNER JOIN product_images ON products.product_id = product_images.product_id
    WHERE products.product_id = $1`;

    const result = await db.query(getQuery, [product_id]);

    if (result.rows.length > 0) {
      const newProductId = result.rows[0].product_id;
      res.status(200).json({
        message: "Product has been sent",
        product_id: newProductId,
        productDetails: result.rows[0], // Sending product details in the response
      });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Failed to send the product: ", error);
    res.status(500).json({ error: "Failed to send the product" });
  }
};

module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
  getProduct,
};
