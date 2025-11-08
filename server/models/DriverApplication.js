// server/models/DriverApplication.js
const mongoose = require('mongoose');

const DriverApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: String,
  licenseNumber: { type: String, required: true },
  vehicleModel: { type: String, required: true },
  vehicleNumber: String,
  city: String,
  notes: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DriverApplication', DriverApplicationSchema);
