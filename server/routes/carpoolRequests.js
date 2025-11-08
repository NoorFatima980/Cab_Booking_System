// server/routes/carpoolRequests.js
const express = require('express');
const CarpoolRequest = require('../models/CarpoolRequest');

const router = express.Router();

// POST create carpool request
router.post('/', async (req, res) => {
  try {
    const doc = await CarpoolRequest.create(req.body);
    res.status(201).json(doc);
  } catch (err) {
    console.error("Carpool request error", err);
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
