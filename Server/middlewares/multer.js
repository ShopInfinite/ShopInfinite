const db = require("../models/db");
const fs = require("fs");
const path = require("path");

//* Endpoint to store images
const uploadImages = async (req, res) => {
  const { product_id } = req.params;

  // Assuming your images are in a 'images' folder
  const imagesFolderPath = path.join(
    __dirname,
    "../images/men/jackets/jacket1"
  );

  const client = await db.connect(); // Use db connection

  try {
    const imageFiles = fs.readdirSync(imagesFolderPath);

    const imagesToStore = [];

    imageFiles.forEach((file, index) => {
      if (index < 3) {
        // considering image1, image2, image3 columns
        const imageData = fs.readFileSync(`${imagesFolderPath}/${file}`);
        imagesToStore.push(imageData);
      }
    });

    const query =
      "INSERT INTO product_images (product_id, image1, image2, image3) VALUES ($1, $2, $3, $4)";
    await client.query(query, [
      product_id,
      imagesToStore[0],
      imagesToStore[1],
      imagesToStore[2],
    ]);

    res.status(200).json({ message: "Images stored successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    client.release(); // Release the client connection
  }
};

const getImages = async (req, res) => {
  const { product_id } = req.params;

  try {
    const query = 'SELECT image1, image2, image3 FROM product_images WHERE product_id = $1';
    const result = await db.query(query, [product_id]);

    if (result.rows.length > 0) {
      res.set('Content-Type', 'image/jpeg'); 

      res.send(result.rows[0].image1); 
      // res.send(result.rows[0].image2);
      // res.send(result.rows[0].image3);

    } else {
      res.status(404).json({ error: 'No images found for this product ID' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = {
  uploadImages,
  getImages,
};
