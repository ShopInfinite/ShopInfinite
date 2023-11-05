require("dotenv").config();

const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const token = req.headers.authorization; // after getting the token from the front to verify it

  if (!token) return res.sendStatus(401);

  jwt.verify(token, secret_key, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.user = decoded;
    next();
  });
};
module.exports = verifyJWT;
