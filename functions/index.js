const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv"); // Load environment variables
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);
//const { Message } = require("firebase-functions/v1/pubsub");

const app = express(); //initiailie epress
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Parse JSON bodies
app.use(express.json());

// Example route to handle payments
app.get("/", (req, res) => {
  res.status(200).join((message, "suesslly "));
});
exports.api = onRequest(app); //instead of app.listen(url,port) we use onRequest funtion from firebase
//exports.api = functions.https.onRequest(app);
