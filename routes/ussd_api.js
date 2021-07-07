const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/ussd-channel/callback", (request, response) => {
  // Algorithm goes here...

  response.send("Test response for ussd");
});

module.exports = router;

// Notes:
// For the following ussd training session we will write an algorithm that uses USSD to provide an iteractive menu to the User
// and send subsequent responses for each user response and in the end terminate the program.
// Read the variables sent via POST from our API

// eg.
//  const {
//     sessionId,
//     serviceCode,
//     phoneNumber,
//     text,
// } = req.body;

// let response = '';

// if (text == '') {
//     // This is the first request. Note how we start the response with CON
//     response = `CON What would you like to check
//     1. My account
//     2. My phone number`;
// } else if ( text == '1') {
//     // Business logic for first level response
//     response = `CON Choose account information you want to view
//     1. Account number`;
// } else if ( text == '2') {
//     // Business logic for first level response
//     // This is a terminal request. Note how we start the response with END
//     response = `END Your phone number is ${phoneNumber}`;
// } else if ( text == '1*1') {
//     // This is a second level response where the user selected 1 in the first instance
//     const accountNumber = 'ACC100101';
//     // This is a terminal request. Note how we start the response with END
//     response = `END Your account number is ${accountNumber}`;
// }

// // Send the response back to the API
// res.set('Content-Type: text/plain');
// res.send(response);
