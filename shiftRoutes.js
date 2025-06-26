const express = require('express');
const router = express.Router();
const Shift = require('../models/shift');

router.get('/', async (req, res) => {
  const shifts = await Shift.find().populate('staffId');
  res.json(shifts);
});

router.post('/', async (req, res) => {
  const newShift = new Shift(req.body);
  await newShift.save();
  res.status(201).json(newShift);
});

module.exports = router;
