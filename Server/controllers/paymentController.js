const db = require("../models/db");

// Functions for working with payments in your database
function getAllPayments() {
  return db.query("SELECT * FROM payment");
}

function getPayment(user_id) {
  const queryText = "SELECT * FROM payment WHERE user_id = $1";
  const value = [user_id];
  return db.query(queryText, value);
}

function getPaymentById(payment_id) {
  const queryText = "SELECT * FROM payment WHERE payment_id = $1";
  const value = [payment_id];
  return db.query(queryText, value);
}

function insertPayment(
  user_id,
  cardholder,
  country,
  state,
  address,
  email,
  method_id,
  phone,
  amount
) {
  try {
    const queryText =
      "INSERT INTO payment (user_id, cardholder, country, state, address, email, method_id, phone, amount) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *";

    const values = [
      user_id,
      cardholder,
      country,
      state,
      address,
      email,
      method_id,
      phone,
      amount,
    ];
    return db.query(queryText, values);
  } catch (error) {
    console.log(error);
  }
}

function deletePayment(payment_id) {
  const queryText = "DELETE FROM payment WHERE payment_id = $1";
  const value = [payment_id];
  return db.query(queryText, value);
}

function updatePayment(payment_name, category_id) {
  const queryText =
    "UPDATE payment SET username = $2, email = $3, password = $4 WHERE user_id = $1";

  const value = [payment_name, category_id];
  return db.query(queryText, value);
}

// Your routes and controllers for payment handling
const stripe = require("stripe")("your_stripe_secret_key");

const newPayment = async (req, res) => {
  try {
    const {
      user_id,
      cardholder,
      country,
      state,
      address,
      email,
      paymentMethodId,
      phone,
      amount,
    } = req.body;

    const payment_img = req?.file?.path ? req.file.path : "majdi";

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 400,
        currency: "aed",
        payment_method_types: ["card"],
        payment_method: paymentMethodId,
        confirm: true,
        description: "done",
        return_url: "https://your-website.com/success",
      });

      try {
        const newPayments = await insertPayment(
          user_id,
          cardholder,
          country,
          state,
          address,
          email,
          paymentMethodId,
          phone,
          amount
        );
        return res.status(200).json(newPayments.rows);
      } catch (error) {
        return res.status(500).json("internal server error");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  } catch (error) {
    // Handle this error case
  }
};

const getPayments = async (req, res) => {
  try {
    const result = await getAllPayments();
    return res.status(200).json(result.rows);
  } catch (error) {
    throw error;
  }
};

const getPaymentByUserId = async (req, res) => {
  const user_id = req.params.userid;
  try {
    const result = await getPayment(user_id);
    return res.status(200).json(result.rows);
  } catch (error) {
    throw error;
  }
};

const deletePaymentById = async (req, res) => {
  const payment_id = req.params.payment_id;
  try {
    const result = await deletePayment(payment_id);
    return res.status(200).json(result.rows);
  } catch (error) {
    throw error;
  }
};

// Export your controllers
module.exports = {
  newPayment,
  getPayments,
  getPaymentByUserId,
  getPaymentById,
  deletePaymentById,
};
