const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  staffId: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
  date: Date,
  status: { type: String, enum: ['Present', 'Absent', 'Late'], default: 'Absent' },
});

module.exports = mongoose.model('Attendance', attendanceSchema);
