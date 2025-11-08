// server/models/Booking.js
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  pickup: { type: String, required: true },
  dropoff: { type: String, required: true },
  stopAt: { type: String, default: '' },
  date: { type: Date, default: Date.now },
  notes: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
