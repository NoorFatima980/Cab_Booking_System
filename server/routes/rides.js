// server/routes/rides.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
  pickup: String,
  dropoff: String,
  time: String,
  vehicleType: String,
  seatsAvailable: Number,
  createdAt: { type: Date, default: Date.now }
});
const Ride = mongoose.model('Ride', RideSchema);

router.post('/create', async (req, res) => {
  try {
    const doc = await Ride.create(req.body);
    res.json({ success: true, ride: doc });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, msg: err.message });
  }
});

// optional: list
router.get('/', async (req, res) => {
  const list = await Ride.find().sort({ createdAt: -1 }).limit(200);
  res.json(list);
});

module.exports = router;
