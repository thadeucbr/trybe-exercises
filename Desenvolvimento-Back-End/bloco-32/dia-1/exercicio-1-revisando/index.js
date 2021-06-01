const { listJokes } = require('./controller/joke');
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', listJokes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
