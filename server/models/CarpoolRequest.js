// server/models/CarpoolRequest.js
const mongoose = require('mongoose');

const CarpoolRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  pickup: { type: String, required: true },
  dropoff: { type: String, required: true },
  dateTime: Date,
  seatsAvailable: { type: Number, default: 1 },
  notes: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CarpoolRequest', CarpoolRequestSchema);
