//server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('hanabicluster.4s3qeef.mongodb.net', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB Atlas"));

const Festival = mongoose.model('Festival', new mongoose.Schema({
  name: String,
  location: String,
  date: String,
  time: String,
  expectedCrowd: String,
  description: String,
  imageUrl: String
}));

app.get('/api/festivals', async (req, res) => {
  const festivals = await Festival.find();
  res.json(festivals);
});

app.listen(5000, () => console.log('Server started on port 5000'));
