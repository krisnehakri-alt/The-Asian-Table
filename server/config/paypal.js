const paypal = require('@paypal/checkout-server-sdk');
require('dotenv').config({ path: '../.env' }); // Adjust path since .env is at root

// Set up PayPal environment (Sandbox for testing)
const environment = new paypal.core.SandboxEnvironment(
    process.env.CLIENT_ID,
    process.env.SECRET_KEY
);
const client = new paypal.core.PayPalHttpClient(environment);

module.exports = { client };
