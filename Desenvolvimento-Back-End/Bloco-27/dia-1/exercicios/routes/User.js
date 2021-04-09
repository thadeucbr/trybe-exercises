const express = require('express');
const app = express();
const Users = require('../models/Users');

app.use(express.json());

app
  .route('/')
  .get(async (_req, res) => {
    const response = await Users.getAll();
    res.status(200).send(response);
  })
  .post(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    
    if(!Users.checkFields()) return res.status(400)
      .json({error: "true", message: "firstName, lastName, email e password são obrigatorios"})
    
    if(!Users.checkPassword) return res.status(400)
    .json({error: "true", message: "O campo 'password' deve ter pelo menos 6 caracteres"})
  
    Users.create(firstName, lastName, email, password);
  
    const respId = await User.getAll();
    const number = respId.length - 1;
  
    res.status(201)
      .json({
        id: respId[number]._id,
        firstName,
        lastName,
        email,
        password
      });
  });

  app
  .route('/:id')
  .get(async (req, res) => {
    const { id } = req.params;
    const search = await Users.getById(id);
    if(!search) return res.status(404).json({error: "true", message: "Usuário não encontrado"})
    res.status(200).json({search});
  })
  .put(async (req,res) => {
    const { firstName, lastName, email, password } = req.body;
    const { id } = req.params;
    const search = await Users.getById(id);
    if(!search) return res.status(404).json({error: "true", message: "Usuário não encontrado"})
    if(!firstName) return res.status(400).json({error: "true", message: "O campo firstName é obrigatorio"});
    if(!lastName) return res.status(400).json({error: "true", message: "O campo lastName é obrigatorio"});
    if(!email) return res.status(400).json({error: "true", message: "O campo email é obrigatorio"});
    if(!Users.checkPassword) return res.status(400)
    .json({error: "true", message: "O campo 'password' deve ter pelo menos 6 caracteres"});

    Users.update(id, firstName, lastName, email, password);

    const respId = await Users.getAll();
    const number = respId.length - 1;
  
    res.status(200)
      .json({
        id: respId[number]._id,
        firstName,
        lastName,
        email,
        password
      });
  });
  
module.exports = app;