const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  email: String,
});

module.exports = mongoose.model('admin', adminSchema);
