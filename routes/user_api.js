const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/users", (request, response) => {
  User.find((error, data) => {
    if (!error) {
      response.json(data);
    }
  });
});

router.post("/users", (request, response) => {
  response.send("Creating new user");
});

router.get("/users/:user_id", (request, response) => {
  response.send("Returning a single user");
});

router.patch("/users/:user_id", (request, response) => {
  response.send("Updating a single user");
});

router.delete("/users/:user_id", (request, response) => {
  response.send("Deleting a single user");
});

module.exports = router;
