const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/products", (request, response) => {
  Product.find((error, data) => {
    if (!error) {
      response.json(data);
    }
  });
});

router.post("/products", (request, response) => {
  const product = new Product({
    name: request.body.name,
    price: request.body.price,
    quantity: request.body.quantity,
    currency: request.body.currency,
    description: request.body.description,
    imageUrl: request.body.imageUrl,
  });
  product.save(() => {
    response.json(product);
  });
});

router.get("/products/:product_id", (request, response) => {
  Product.findById(request.params.product_id, (error, data) => {
    if (!error) {
      response.json(data);
    } else {
      response.status(404).json({ message: "Resource not found" });
    }
  });
});

router.patch("/products/:product_id", async (request, response) => {
  try {
    const result = await Product.findByIdAndUpdate(
      request.params.product_id,
      request.body
    );
    response.json(result);
  } catch (error) {
    response.status(404).json({ message: "Failed to update resource" });
  }
});

router.delete("/products/:product_id", async (request, response) => {
  try {
    const result = await Product.findByIdAndDelete(request.params.product_id);
    if (result) response.json(result);
    else response.status(404).json({ message: "Rsource not found" });
  } catch (error) {
    response.status(404).json({ message: "Failed to delete resource" });
  }
});

module.exports = router;
