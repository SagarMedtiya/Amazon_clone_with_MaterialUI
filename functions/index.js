const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51JxBzOSChEcWkHb1lK9GJOMIPnFxvVr2x7lE97VQ3jYl4IIV3IaP0vxe4Jdn4cds7xbsDifPXnu04R6rToCgFS1s00uaw2JZQw")

// API

// - App config
const app = express();
// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());  //send data and pass it in json format
// - API routes
// dummy routes 
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "INR",
    });
  
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });
    });

// - Listen command
exports.api = functions.https.onRequest(app);