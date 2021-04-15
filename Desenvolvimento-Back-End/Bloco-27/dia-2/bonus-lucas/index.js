const express = require('express');
const Artist = require('./controllers/Artist');
const Music = require('./controllers/Music');
const app = (express());

app.use(express.json());

app.route('/artist')
  .get(Artist.getAll)
  .post(Artist.create)
  .put(Artist.update)
  .delete(Artist.remove)

app.route('/music')
  .get(Music.getAll)
  .post(Music.create)
  .put(Music.updateMusic)
  .delete(Music.remove)

app.put('/music/:oldAlbum', Music.updateAlbum)

app.get('/teste', Music.joinMusics);

const PORT = 3000;
app.listen(PORT, () => {
  console.info(`Aplicação rodando na porta ${PORT}`)
})