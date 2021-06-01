const { getAllCategories } = require('./controller/categories');
const { getARandomJoke, getJokesCategories } = require('./controller/jokes');

const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/categories', getAllCategories);

app.get('/jokes/:categorie', getJokesCategories);
app.get('/jokes', getARandomJoke);
app.get('/', (_req, res) => res.redirect('/categories'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
