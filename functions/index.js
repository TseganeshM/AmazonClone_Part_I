const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv"); // Load environment variables
dotenv.config();

const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express(); //initiailie epress
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Parse JSON bodies
app.use(express.json());

// Example route to handle payments
app.get("/", (req, res) => {
  res.status(200).json({
    message: "successfull ",
  });
});

// Example route to handle payments
app.post("payment/create", async (req, res) => {
  const total = parseInt(req.query.total);
  if (total >= 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(403).json({
      error: error.message,
      message: "total must be  grater then 0",
    });
  }
});

exports.api = onRequest(app); //instead of app.listen(url,port) we use onRequest funtion from firebase
