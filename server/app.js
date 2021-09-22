require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use('/api', require('./routes'));

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function () {
  console.log('Connected to mongoDB server');
});

mongoose.connect(process.env.DB_SERVER);

app.listen(port, function () {
  console.log('Express server has started on port ' + port);
});
