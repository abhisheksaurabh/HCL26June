const express = require('express');
const router = express.Router();
const Staff = require('../models/staff');

router.get('/', async (req, res) => {
  const staff = await Staff.find();
  res.json(staff);
});

router.post('/', async (req, res) => {
  const newStaff = new Staff(req.body);
  await newStaff.save();
  res.status(201).json(newStaff);
});

module.exports = router;
