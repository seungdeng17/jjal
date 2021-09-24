const mongoose = require('mongoose');

const tempImageSchema = new mongoose.Schema({
  key: String,
  image_url: String,
  tag: Array,
  date: Date,
});

module.exports = mongoose.model('tempImage', tempImageSchema);
