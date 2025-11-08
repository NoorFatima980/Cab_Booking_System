// server/routes/driverApplications.js
const express = require('express');
const DriverApplication = require('../models/DriverApplication');

const router = express.Router();

// POST create driver application
router.post('/', async (req, res) => {
  try {
    const doc = await DriverApplication.create(req.body);
    res.status(201).json(doc);
  } catch (err) {
    console.error("Driver application error", err);
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
