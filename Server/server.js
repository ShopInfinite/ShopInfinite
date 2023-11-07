const express = require("express");
const cors = require("cors");
const app = express();

//* Users Router
const signupRoute = require("./routers/usersRouter");
const loginRoute = require("./routers/usersRouter");
const deleteUserRoute = require("./routers/usersRouter");
const updateUserRoute = require("./routers/usersRouter");

//* Products Router
const addProduct = require("./routers/productsRouter");
const updateProduct = require("./routers/productsRouter");
const deleteProduct = require("./routers/productsRouter");

//* Payment Router
const payment = require("./routers/paymentRouter");

//* Product images Router
// const multer = require("./routers/multerRouter");

//* Cart Router
const cart = require("./routers/cartRouter");

//* Comments Router
const comments = require("./routers/commentsRouter");

app.use(cors());
app.use(express.json());

app.use(signupRoute);
app.use(loginRoute);
app.use(deleteUserRoute);
app.use(updateUserRoute);
app.use(addProduct);
app.use(updateProduct);
app.use(deleteProduct);
app.use(payment);
// app.use(multer);
app.use(cart);
app.use(comments);
app.use("/images", express.static("images"));

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
