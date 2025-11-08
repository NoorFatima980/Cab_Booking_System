// server/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['rider','driver'], default: 'rider' },
  createdAt: { type: Date, default: Date.now },
  location: {
    lat: Number,
    lng: Number,
    city: String,
    updatedAt: Date
  }
});

module.exports = mongoose.model('User', UserSchema);
