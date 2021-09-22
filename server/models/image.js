const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  tag: String,
  liked_cnt: Number,
  liked_ip: String,
  image_url: String,
  date: Date,
});

module.exports = mongoose.model('image', imageSchema);
