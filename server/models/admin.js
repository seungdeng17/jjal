const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  email: String,
  token: String,
});

module.exports = mongoose.model('admin', adminSchema);
