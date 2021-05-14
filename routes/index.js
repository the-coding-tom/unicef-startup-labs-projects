const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.send("You are in get");
});

router.post("/profiles", (request, response) => {
  response.send("You are in post");
});

router.post("/friends", (request, response) => {
  response.send("You are in post");
});

module.exports = router;
