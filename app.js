const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8080;

mongoose.connect('mongodb://mongodb:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const ItemSchema = new mongoose.Schema({
  name: String
});

const Item = mongoose.model('Item', ItemSchema);

app.get('/', async (req, res) => {
  const items = await Item.find({});
  res.json(items);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});