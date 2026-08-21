const express = require('express');
const router = express.Router();
const paypal = require('@paypal/checkout-server-sdk');
const { client } = require('../config/paypal');
const Order = require('../models/Order');

// Helper to calculate total from items securely on the server
const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
};

// POST /api/orders/create-order
router.post('/create-order', async (req, res) => {
    const { items } = req.body;
    const totalAmount = calculateTotal(items);

    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'USD',
                value: totalAmount.toFixed(2)
            }
        }]
    });

    try {
        const order = await client.execute(request);
        console.log("PayPal Create Order SUCCESS:", order.result.id);
        
        // Save initial pending order to MongoDB
        const newOrder = new Order({
            paypalOrderId: order.result.id,
            items,
            totalAmount
        });
        await newOrder.save();
        console.log("Saved order to Mongo");

        res.json({ id: order.result.id });
    } catch (err) {
        console.error("PayPal Create Order Error:", err);
        res.status(500).json({ error: err.message });
    }
});

// POST /api/orders/capture-order
router.post('/capture-order', async (req, res) => {
    const { orderID } = req.body;

    const request = new paypal.orders.OrdersCaptureRequest(orderID);
    request.requestBody({});

    try {
        const capture = await client.execute(request);
        
        // Update order in MongoDB
        const updatedOrder = await Order.findOneAndUpdate(
            { paypalOrderId: orderID },
            { 
                paymentStatus: 'paid', 
                paypalCaptureId: capture.result.purchase_units[0].payments.captures[0].id,
                deliveryAddress: capture.result.purchase_units[0].shipping.address
            },
            { new: true }
        );

        res.json(updatedOrder);
    } catch (err) {
        console.error("PayPal Capture Order Error:", err);
        res.status(500).json({ error: err.message });
    }
});

// GET /api/orders/my-orders (Example for fetching)
router.get('/my-orders', async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
