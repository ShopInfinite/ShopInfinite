const { log } = require("console");
const db = require("../models/db");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images"); // Specify the upload directory - create "uploads" in your project root
  },
  filename: (req, file, cb) => {
    const filename = Date.now() + path.extname(file.originalname);
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

module.exports = { upload };

// Add Products with Image
const addProductWithImage = async (req, res) => {
  upload.single("product_image")(req, res, async function (err) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Image upload failed" });
    }

    // Check if a file is uploaded
    if (!req.file) {
      return res.status(400).json({ error: "No image uploaded" });
    }

    // Destructure fields from req.body
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

    const product_image = req.file.path; // Path to the uploaded image

    try {
      const insertQuery = `INSERT INTO products (
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
        product_image
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      RETURNING product_id`;

      const insertValues = [
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
        product_image,
      ];

      const result = await db.query(insertQuery, insertValues);

      if (result.rows.length > 0) {
        const newProductId = result.rows[0].product_id;
        return res.status(201).json({
          message: "Product added successfully",
          product_id: newProductId,
        });
      } else {
        throw new Error("Failed to insert the product into the database");
      }
    } catch (error) {
      console.error("Failed to add the product: ", error);
      return res.status(500).json({ error: "Failed to add the product" });
    }
  });
};

// //* Add Products
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
//     product_image,
//   } = req.body;

//   // const image_url = req.files['product_images'][0].filename;

//   try {
//     const insertQuery = `INSERT INTO products (
//           product_name,
//           product_description,
//           product_subdescription,
//           product_price,
//           product_type,
//           product_target,
//           product_rate,
//           product_size,
//           product_fabrictype,
//           product_origin,
//           product_image
//         )
//         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
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
//       product_image,
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
    product_image,
  } = req.body;

  try {
    const result = await updateProductInDatabase(
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
      product_image
    );
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({ error: "Update Product failed" });
  }
};

async function updateProductInDatabase(
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
  product_image
) {
  const queryText = `
      UPDATE products 
       SET product_name = $2,
           product_description = $3,
           product_subdescription = $4,
           product_price = $5,
           product_type = $6,
           product_target = $7,
           product_rate = $8,
           product_size = $9,
           product_fabrictype = $10,
           product_origin = $11,
           product_image = $12

       WHERE product_id = $1`;
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
    product_image,
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
    SELECT product_name, product_subdescription, product_price, product_image
    FROM products
    WHERE product_id = $1
  `;
  const values = [product_id];

  try {
    const result = await db.query(queryText, values); // Assuming you have a database connection named 'db'
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

// const getAllProduct = async (req, res) => {
//   try {
//     const result = await getAllProductFromDatabase();
//   } catch (error) {
//     console.error(error); // Log the error
//     res.status(500).json({ error: "Get Product failed" });
//   }
// };

const getAllProduct = async (req, res) => {
  const queryText = `
    SELECT * from products
  `;

  try {
    const result = await db.query(queryText); // Assuming you have a database connection named 'db'
    console.log(result);
    const products = result.rows.map((product) => {
      const product_image = product.product_image;
      const image_url = product_image ? `http://localhost:5000/images/${product_image}` : null;
      return {
        product_id: product.product_id,
        product_name: product.product_name,
        product_price: product.product_price,
        product_description: product.product_description,
        product_subdescription: product.product_subdescription,
        product_type: product.product_type,
        product_target: product.product_target,
        product_rate: product.product_rate,
        product_size: product.product_size,
        product_origin: product.product_origin,
        product_image: image_url,
      };
    });
    if (products.length > 0) {
      res
        .status(200)
        .json({ message: "Get All Products Successfully", data: products });
    } else {
      res.status(404).json({ error: "No products found" });
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProduct,
  getProduct,
  addProductWithImage,
};
