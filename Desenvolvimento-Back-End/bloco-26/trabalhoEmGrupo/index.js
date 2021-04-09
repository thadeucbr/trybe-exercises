const express = require('express');
const validator = require("email-validator")
const app = express();
const port = 3000;

app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log(validator.validate(email))
  if(!validator.validate(email)) res.status(401).json('email or password is incorrect.');
  if(password.length < 5 || password.length > 7 && !typeof(parseInt(password)) === 'number') return res.status(401).send('email or password is incorrect.');
  res.status(200).send({
    "email": email,
    "token": "123",
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

