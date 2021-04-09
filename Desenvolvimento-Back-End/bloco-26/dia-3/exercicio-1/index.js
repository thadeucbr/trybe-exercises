const express = require('express');
const app = express();
app.use(express.json());
const fs = require('fs');

app.get('/ping', (_req, res) => {
  res.status(200)
  .json({ "message": "pong"});
});

app.post('/hello', (req, res) => {
  const { name, age } = req.body;
  if(Number(age) < 27) {
    return res.status(401).json({"message": "Unauthorized"})
  }
  res.status(200).json({ "message" : `Hello, ${name}!`});
});

app.put('/users/:name/:age',(req, res) => {
  const { name, age } = req.params;
  res.status(200).json({"message": `Seu nome é ${name} e você tem ${age} anos de idade.`})
});

app.get('/simpsons', (_req, res) => {
  fs.readFile('./simpsons.json', (err, data) => {
    res.status(200)
      .json(JSON.parse(data));
  });
});

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;
  fs.readFile('./simpsons.json', (err, data) => {
    const response = JSON.parse(data);
    const result = response.find(item => item.id === id)
    if(result) return res.status(200).json(result);
    return res.status(200).json([]);
  });
});

app.listen(3000, () => {
  console.log("Rodando na porta 3000")
});
