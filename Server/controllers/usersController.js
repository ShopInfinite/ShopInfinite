const db = require("../models/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const joi = require("joi");
// const cookies = require("js-cookie");

async function signup(req, res) {
  const {
    fistname,
    lastname,
    email,
    password,
    city,
    address,
    phonenumber,
    role_id,
  } = req.body;

  try {
    const schema = joi.object({
      fistname: joi.string().alphanum().min(3).max(20).required(),
      lastname: joi.string().alphanum().min(3).max(20).required(),
      email: joi
        .string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: joi
        .string()
        .pattern(
          new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&!])[A-Za-z\\d@#$%^&!]{6,30}$"
          )
        )
        .required(),
      phonenumber: joi
        .string()
        .pattern(/^[0-9]{7,12}$/)
        .required(),
    });
    const validate = schema.validate({
      fistname,
      lastname,
      email,
      password,
      phonenumber,
    });
    if (validate.error) {
      res.status(405).json({ error: validate.error.details });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10); //10 is salt

      const checkQuery = "SELECT user_id FROM users WHERE email = $1";
      const checkResult = await db.query(checkQuery, [email]);

      if (checkResult.rows.length > 0) {
        return res.status(409).json({ error: "User already exists" });
      }

      const insertQuery = `INSERT INTO users (fistname,lastname, email, Password,city,address,phonenumber,role_id )
                              VALUES ($1, $2, $3,$4,$5,$6,$7,$8)
                              RETURNING user_id`;

      const insertValues = [
        fistname,
        lastname,
        email,
        hashedPassword,
        city,
        address,
        phonenumber,
        role_id,
      ];
      const result = await db.query(insertQuery, insertValues);
      const newUserId = result.rows[0].user_id;

      res
        .status(201)
        .json({ message: "User added successfully", user_id: newUserId });
    }
  } catch (error) {
    console.error("Failed to register : ", error);
    res.status(500).json({ error: "Failed to register" });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const checkQuery = "SELECT * FROM users WHERE email = $1";
    const checkResult = await db.query(checkQuery, [email]);

    if (checkResult.rows.length === 1) {
      const passwordMatch = await bcrypt.compare(
        password,
        checkResult.rows[0].password
      );

      if (passwordMatch) {
        // Generate and return the JWT token
        const token = jwt.sign(
          {
            id: checkResult.rows[0].user_id,
            fistname: checkResult.rows[0].fistname,
            lastname: checkResult.rows[0].lastname,
          },
          process.env.SECRET_KEY,
          {
            expiresIn: "1d",
          }
        );
        console.log(token);

        // res.cookie("token", token, { httpOnly: true });
        // console.log(token);
        // res.status(200).json(token);

        // Continue with the response logic here
        res.json({
          message: "Login successful",
          user: checkResult.rows[0],
          token,
        });
      }
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Login failed: ", error);
    res.status(500).json({ error: "Login failed" });
  }
}

// function decodeToken(token, key) {
//   return new Promise((resolve, reject) => {
//     jwt.verify(token, key, (err, decoded) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(decoded);
//       }
//     });
//   });
// }

// async function decode(req, res) {
//   const { token } = req.body;
//   const key = SECRET_KEY; // Define your secret key here

//   decodeToken(token, key)
//     .then((decoded) => {
//       res.status(200).json(decoded);
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).json({ error: "Token decoding failed" });
//     });
// }

const updateUser = async (req, res) => {
  const user_id = req.params.id;
  const { fistname, lastname, email, password, city, address, phonenumber } =
    req.body;

  try {
    const schema = joi.object({
      fistname: joi.string().alphanum().min(3).max(20).required(),
      lastname: joi.string().alphanum().min(3).max(20).required(),
      email: joi
        .string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: joi
        .string()
        .pattern(
          new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&!])[A-Za-z\\d@#$%^&!]{6,30}$"
          )
        )
        .required(),
      phonenumber: joi
        .string()
        .pattern(/^[0-9]{7,12}$/)
        .required(),
    });

    const { error } = schema.validate({
      fistname,
      lastname,
      email,
      password,
      phonenumber,
    });

    if (error) {
      return res.status(400).json({ error: error.details });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    const result = await updateUserInDatabase(
      user_id,
      fistname,
      lastname,
      email,
      hashedPassword,
      city,
      address,
      phonenumber
    );
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Update user failed" });
  }
};

async function updateUserInDatabase(
  user_id,
  fistname,
  lastname,
  email,
  password,
  city,
  address,
  phonenumber
) {
  const queryText =
    "UPDATE users SET fistname = $2, lastname = $3, email = $4, password = $5, city = $6, address = $7, phonenumber = $8 WHERE user_id = $1";
  const values = [
    user_id,
    fistname,
    lastname,
    email,
    password,
    city,
    address,
    phonenumber,
  ];
  return db.query(queryText, values);
}

const deleteUser = async (req, res) => {
  const user_id = req.params.id;
  try {
    const result = await deleteUserInDatabase(user_id); // Changed the function name
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({ error: "Delete user failed" });
  }
};

async function deleteUserInDatabase(user_id) {
  // Changed the function name
  const queryText = "DELETE FROM users WHERE user_id = $1";
  const values = [user_id];
  return db.query(queryText, values);
}

module.exports = {
  signup,
  login,
  // decode,
  updateUser,
  deleteUser,
};
