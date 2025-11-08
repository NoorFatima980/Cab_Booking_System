const mongoose = require("mongoose");

const DriverLeadSchema = new mongoose.Schema({
  name: String,
  phone: String,
  city: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("DriverLead", DriverLeadSchema);
