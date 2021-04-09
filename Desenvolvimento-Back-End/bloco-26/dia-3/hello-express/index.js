const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.route('/hello')
  .get((req, res) => {
    const name = req.query.name;
    res.status(200)
      .json({ message: `Hello ${name}`})
  });

const langs = [
  'CSS',
  'JS',
  'HTML',
  'React'
];

app.route('/langs')
  .get((req, res) => {
    res.status(200)
    .json(langs)
  })
  .post((req, res) => {
    const { name } = req.body;
    langs.push(name);
    res.send(`${name} adicionado com sucesso!`)
  });

  app.listen(3000, () => console.log('Rodando na classica 3000'));
