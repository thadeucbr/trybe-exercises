const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }});

let estrelinhas = 0;
let goxtei = 0;

io.on('connection', (socket) => {
  socket.on('estrelinhaClick', (item) => {
    estrelinhas += item;
    io.emit('quantidadeEstrelinhas', estrelinhas);
  });

  socket.on('goxteiClick', (item) => {
    goxtei += item;
    io.emit('quantidadeGoxtei', goxtei);
  });

  io.emit('quantidadeEstrelinhas', estrelinhas);
  io.emit('quantidadeGoxtei', goxtei);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});