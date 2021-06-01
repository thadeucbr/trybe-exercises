const routes = require('express').Router();

const { getAllPatients } = require('./controller')

routes.get('/patient', getAllPatients);

module.exports = routes;