const mongoose = require("mongoose");
const User = require("./models/User.js");
const express = require("express");

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

app.get("/", (request, response)=>{
  response.send("You are in get")
})

app.post("/profiles", (request, response)=>{
  response.send("You are in post")
})

app.post("/friends", (request, response)=>{
  response.send("You are in post")
})

app.listen(port, ()=>{
  console.log("server started!")
})