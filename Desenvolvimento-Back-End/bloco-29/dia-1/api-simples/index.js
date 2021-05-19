require('dotenv').config();
const express = require('express');

const { PORT, TEXT } = process.env;

const app = express();

app.get('/', (req, res) => {
  res.status(200).json(TEXT)
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
