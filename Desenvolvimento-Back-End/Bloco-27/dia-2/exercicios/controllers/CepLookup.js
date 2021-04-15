const CepLookup = require('../services/CepLookup');

const getCep = async (req, res) => {
  try {
    const { cep } = req.query;
    const result = await CepLookup.getCep(cep);
    res.status(result.status).json(result.message)
  } catch (error) {
    res.status(500).json({message: 'Algo deu errado!'})
    console.log(error)
  }
};

module.exports = {
  getCep,
}