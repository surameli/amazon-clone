/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { messaging } = require("firebase-admin");
const { Message } = require("firebase-functions/pubsub");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
 const app = express()
 app.use(cors({origin:true}))




app.use(express.json());
app.get("/" , (req, res) => {
    res.status(200).json({
        Message: "success !",
    });
})



app.post("/payment/create", async (req, res) => {
    const total = req.query.total;

    if (total > 0) {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: "usd",
        });
        console.log(paymentIntent);
        
        res.status(201).json({
            client_secret: paymentIntent.client_secret,
        });
    }else{
        res.status(403).json({
            message: "total must be greater than 0",
        });
    }
});


exports.api = onRequest(app);