// server/routes/bookings.js
const express = require('express');
const Booking = require('../models/Booking');

const router = express.Router();

// POST /api/bookings - create booking
router.post('/', async (req, res) => {
  try {
    const { pickup, dropoff, stopAt, date, notes } = req.body;
    if (!pickup || !dropoff) return res.status(400).json({ message: 'pickup and dropoff required' });

    const booking = new Booking({
      pickup,
      dropoff,
      stopAt: stopAt || '',
      date: date ? new Date(date) : undefined,
      notes: notes || ''
    });
    const saved = await booking.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/bookings - list bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 }).limit(100);
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
