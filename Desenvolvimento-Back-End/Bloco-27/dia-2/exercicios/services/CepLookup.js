const CepLookup = require('../models/CepLookup');
const Statistic = require('../models/statistic');
const fetch = require('node-fetch');

const message = {
  notFound: 'CEP não encontrado.',
  invalid: 'O CEP informado não é valido.'
}

const code = {
  ok: 200,
  badRequest: 400,
}

const cepIsValid = async (cep) => {
  const validCep = await cep.replace(/[^0-9]/g, '');
  if(validCep.length !== 8) return false
  return validCep
}

const arrayIsEmpty = (data) => {
  if(data.length < 1) return true
  return null
};

const fetchCepData = async (cep) => {
  try {
    return fetch(`http://cep.la/${cep}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => json);
  } catch (error) {
    console.log(error)
  }
}

const getCep = async (cep) => {
  try {
    const validCep = await cepIsValid(cep)
    if(!validCep) return {message: message.invalid, status: code.badRequest}
    const result = await CepLookup.getCep(validCep);
    if(arrayIsEmpty(result)) {
      const data = await fetchCepData(validCep);
      if(arrayIsEmpty(data)) return {message: message.notFound, status: code.ok}
      await CepLookup.addCep(data);
      return {status: code.ok, message: data};
    }
    await Statistic.statisticUfIncrement(result);
    await Statistic.statisticCityIncrement(result);
    return {message: result, status: code.ok};
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getCep,
}