const app = require('express')();
const http = require('http').createServer(app);

const cors = require('cors');
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000', // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  }
});

app.use(cors())


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on("connection", (socket) => {
  console.log(`${socket.id} Conectado`);
  // socket.on('login', (user) => {
  //   socket.emit('user', user)
  // })
  socket.emit('ola', socket.id);
  // socket.emit('ola', 'Que bom que você chegou aqui! Fica mais um cadin, vai ter bolo :)' );
  socket.broadcast.emit('mensagemServer', { mensagem:  `Iiiiiirraaaa! ${socket.id} acabou de se conectar :D`});
  socket.on('disconnect', () => {
    console.log(`${socket.id} Desconectado`);
  });

  socket.on('mensagem', (msg) => {
    io.emit('mensagemServer', { mensagem: msg, user: socket.id });
  });
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});