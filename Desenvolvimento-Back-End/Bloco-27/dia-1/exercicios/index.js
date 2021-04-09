const express = require('express');
const app = express();
const User = require('./routes/User');

app.use('/user', User);

app.listen(3000, () => {
  console.log(`Aplicação rodando na porta 3000`)
})