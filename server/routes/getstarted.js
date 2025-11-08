const express = require("express");
const router = express.Router();

const DriverLead = require("../models/DriverLead");
const CarpoolLead = require("../models/CarpoolLead");

router.post("/driver", async (req, res) => {
  try {
    const saved = await DriverLead.create(req.body);
    return res.json({ success: true, saved });
  } catch (err) {
    return res.status(500).json({ success: false, msg: err.message });
  }
});

router.post("/carpool", async (req, res) => {
  try {
    const saved = await CarpoolLead.create(req.body);
    return res.json({ success: true, saved });
  } catch (err) {
    return res.status(500).json({ success: false, msg: err.message });
  }
});

module.exports = router;
