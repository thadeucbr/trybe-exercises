const express = require('express');
const app = express();
const { Books } = require('../models');
app.use(express.json());

app.get('/books', async (req, res) => {
  const books = await Books.findAll();
  res.status(200).json(books);
});
