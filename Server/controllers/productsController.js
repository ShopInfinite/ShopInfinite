const db = require("../models/db");

//* Add Products
// async function addProduct(req, res) {
//   const {
//     product_name,
//     product_description,
//     product_subdescription,
//     product_price,
//     product_type,
//     product_target,
//     product_rate,
//     product_size,
//     product_fabrictype,
//     product_origin,
//   } = req.body;

//   // const image_url1 = req.files["product_images"][0].filename;
//   // const image_url2 = req.files["product_images"][1].filename;
//   // const image_url3 = req.files["product_images"][2].filename;

//   try {
//     const insertQuery = `INSERT INTO products (
//           "product_name",
//           "product_description",
//           "product_subdescription",
//           "product_price",
//           "product_type",
//           "product_target",
//           "product_rate",
//           "product_size",
//           "product_fabrictype",
//           "product_origin"
//         )
//         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
//         RETURNING product_id`;

//     const insertValues = [
//       product_name,
//       product_description,
//       product_subdescription,
//       product_price,
//       product_type,
//       product_target,
//       product_rate,
//       product_size,
//       product_fabrictype,
//       product_origin,
//     ];
//     const result = await db.query(insertQuery, insertValues);
//     const newProductId = result.rows[0].product_id;
//     res.status(201).json({
//       message: "Product added successfully",
//       product_id: newProductId,
//     });
//   } catch (error) {
//     console.error("Failed to add the product: ", error);
//     res.status(500).json({ error: "Failed to add the product" });
//   }
// }

async function addProduct(req, res) {
  const {
    product_name,
    product_description,
    product_subdescription,
    product_price,
    product_type,
    product_target,
    product_rate,
    product_size,
    product_fabrictype,
    product_origin,
  } = req.body;

  try {
    const insertProductQuery = `
      INSERT INTO products (
        product_name,
        product_description,
        product_subdescription,
        product_price,
        product_type,
        product_target,
        product_rate,
        product_size,
        product_fabrictype,
        product_origin
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING product_id`;

    const insertProductValues = [
      product_name,
      product_description,
      product_subdescription,
      product_price,
      product_type,
      product_target,
      product_rate,
      product_size,
      product_fabrictype,
      product_origin,
    ];

    const productResult = await db.query(insertProductQuery, insertProductValues);
    const newProductId = productResult.rows[0].product_id;

    // Call function to insert images
    await insertProductImages(newProductId, req.files);

    res.status(201).json({
      message: "Product and images added successfully",
      product_id: newProductId,
    });
  } catch (error) {
    console.error("Failed to add the product and images: ", error);
    res.status(500).json({ error: "Failed to add the product and images" });
  }
}

//* Insert images to their corresponding product
async function insertProductImages(productId, files) {
  const imagesToStore = [];

  for (let i = 0; i < 3 && i < files.length; i++) {
    const file = files[i];
    const imageData = fs.readFileSync(file.path);
    imagesToStore.push(imageData);
  }

  const insertImagesQuery = `
    INSERT INTO product_images (product_id, image1, image2, image3)
    VALUES ($1, $2, $3, $4)
  `;

  const insertImagesValues = [productId, ...imagesToStore];

  await db.query(insertImagesQuery, insertImagesValues);
}

//* Update Products
const updateProduct = async (req, res) => {
  const product_id = req.params.product_id;
  const {
    product_name,
    product_description,
    product_subdescription,
    product_price,
    product_type,
    product_target,
    product_rate,
    product_size,
    product_fabrictype,
    product_origin,
  } = req.body;

  try {
    const result = await updateProductInDatabase(
      product_id,
      product_name,
      product_description,
      product_subdescription,
      product_price,
      product_type,
      product_target,
      product_rate,
      product_size,
      product_fabrictype,
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
  product_subdescription,
  product_price,
  product_type,
  product_target,
  product_rate,
  product_size,
  product_fabrictype,
  product_origin
) {
  const queryText = `
      UPDATE products 
       SET "product_name" = $2,
           "product_description" = $3,
           "product_subdescription" = $4,
           "product_price" = $5,
           "product_type" = $6,
           "product_target" = $7,
           "product_rate" = $8,
           "product_size" = $9,
           "product_fabrictype" = $10,
           "product_origin" = $11
       WHERE "product_id" = $1`;
  const values = [
    product_id,
    product_name,
    product_description,
    product_subdescription,
    product_price,
    product_type,
    product_target,
    product_rate,
    product_size,
    product_fabrictype,
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
    const result = await getProductFromDatabase(product_id);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({ error: "Get Product failed" });
  }
};

async function getProductFromDatabase(product_id) {
  const queryText = `
    SELECT product_name, product_subdescription, product_price
    FROM products
    WHERE product_id = $1
  `;
  const values = [product_id];

  // SELECT
  //     products.product_name,
  //     products.product_subdescription,
  //     products.product_price,
  //     product_images.image1
  //   FROM products
  //   INNER JOIN product_images ON products.product_id = product_images.product_id
  //   WHERE products.product_id = $1

  try {
    const result = await db.query(queryText, values); // Assuming you have a database connection named 'db'
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

const getAllProduct = async (req, res) => {
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
    SELECT * from products
  `;
  // const values = [product_id];

  try {
    const result = await db.query(queryText); // Assuming you have a database connection named 'db'
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProduct,
  getProduct,
};
