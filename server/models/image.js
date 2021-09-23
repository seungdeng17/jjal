const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  key: String,
  image_url: String,
  tag: Array,
  like_cnt: Number,
  like_ip: Array,
  date: Date,
});

module.exports = mongoose.model('image', imageSchema);
