const mongoose = require("mongoose");

const CarpoolLeadSchema = new mongoose.Schema({
  name: String,
  phone: String,
  destination: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("CarpoolLead", CarpoolLeadSchema);
