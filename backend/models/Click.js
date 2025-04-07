const mongoose = require('mongoose');

const clickSchema = new mongoose.Schema({
  page: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Click', clickSchema);
