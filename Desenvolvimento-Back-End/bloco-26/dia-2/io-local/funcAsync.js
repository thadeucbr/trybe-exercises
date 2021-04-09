const fs = require('fs');

function teste(file){
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, content) => {
      if(err) reject(Error("Deu ruim!"))
      resolve(content);
    })
  })
}