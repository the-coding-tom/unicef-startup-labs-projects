const mongoose = require("mongoose");
const User = require("./models/User.js");
const express = require("express");
const routes = require("./routes");

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

app.use(routes);

app.listen(port, () => {
  console.log("server started!");
});
