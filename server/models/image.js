const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  tag: String,
  like_cnt: Number,
  like_ip: String,
  image_url: String,
  date: Date,
});

module.exports = mongoose.model('image', imageSchema);
