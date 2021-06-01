const express = require('express');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  }});

let votes = {
  love: 0,
  wow: 0,
  like: 0,
  meh: 0
};

io.on('connection', (socket) => {
  console.log('Client conectado');
  io.emit('getVotes', votes);
  socket.on('updateVote', (vote) => {
    console.log(vote)
    votes = vote;
    io.emit('getVotes', votes);
  });
});

app.get('/', (req, res) => {
  res.status(200).json({ok: true})
});

  http.listen(3001, () => {
    console.log('Servidor ouvindo na porta 3001');
  });