const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema({
  staffId: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
  date: Date,
  startTime: String,
  endTime: String
});

module.exports = mongoose.model('Shift', shiftSchema);
