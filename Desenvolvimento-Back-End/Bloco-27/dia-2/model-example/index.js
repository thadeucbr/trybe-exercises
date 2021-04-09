const express = require('express');

const Author = require('./controllers/Author');
const Books = require('./controllers/Book');

const app = express();

app.use(express.json());

app.get('/authors', Author.getAll);

app.post('/authors', Author.create)

app.get('/books', Books.getAll);

app.get('/books/:id', Books.getById)

app.post('/books', Books.create)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});