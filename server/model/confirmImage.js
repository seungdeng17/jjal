const mongoose = require('mongoose');

const confirmImageSchema = new mongoose.Schema({
  key: String,
  image_url: String,
  tag: Array,
  date: Date,
});

module.exports = mongoose.model('confirmImage', confirmImageSchema);
