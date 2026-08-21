const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  paypalOrderId: { type: String, required: true },
  paypalCaptureId: { type: String },
  paymentStatus: { type: String, default: 'pending', enum: ['pending', 'paid', 'failed'] },
  orderStatus: { type: String, default: 'processing' },
  deliveryAddress: { type: Object },
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
    }
  ],
  totalAmount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
