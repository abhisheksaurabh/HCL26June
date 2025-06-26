const express = require('express');
const router = express.Router();
const Attendance = require('../models/attendance');

router.get('/', async (req, res) => {
  const records = await Attendance.find().populate('staffId');
  res.json(records);
});

router.post('/', async (req, res) => {
  const record = new Attendance(req.body);
  await record.save();
  res.status(201).json(record);
});

module.exports = router;
