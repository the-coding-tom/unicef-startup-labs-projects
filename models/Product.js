const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  currency: String,
  description: String,
  imageUrl: String,
});

module.exports = mongoose.model("Product", ProductSchema);
