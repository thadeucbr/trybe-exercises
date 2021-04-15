const express = require('express');
const CepLookup = require('./controllers/CepLookup');
const app = express();
app.use(express.json());

app.get('/lookup', CepLookup.getCep);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Aplicação executando na porta ${PORT}`)
})