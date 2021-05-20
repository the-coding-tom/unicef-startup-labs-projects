const mongoose = require("mongoose");
const User = require("./models/User.js");
const express = require("express");
const user_routes = require("./routes/user_api");
const product_routes = require("./routes/product_api");
const cors = require("cors");

mongoose
  .connect("mongodb://localhost/my_ecommerce_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected!");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
const port = 3000;

// third-party middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1", user_routes);
app.use("/api/v1", product_routes);

app.listen(port, () => {
  console.log("server started!");
});
