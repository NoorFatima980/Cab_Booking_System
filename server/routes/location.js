// server/routes/location.js
const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/User');
const router = express.Router();

// POST /api/location - save lat/lng (+ city) for current user
router.post('/', auth, async (req, res) => {
  try {
    const { lat, lng, city } = req.body;
    if (typeof lat !== 'number' || typeof lng !== 'number') {
      return res.status(400).json({ message: 'lat and lng numeric required' });
    }
    const userId = req.user.id;
    const update = { 'location.lat': lat, 'location.lng': lng, 'location.updatedAt': new Date() };
    if (city) update['location.city'] = city;
    const updated = await User.findByIdAndUpdate(userId, { $set: update }, { new: true });
    if (!updated) return res.status(404).json({ message: 'User not found' });
    res.json({ success: true, location: updated.location });
  } catch (err) {
    console.error('Location save error', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/location/me - get my saved location
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('location name email role');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ location: user.location, user: { name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
