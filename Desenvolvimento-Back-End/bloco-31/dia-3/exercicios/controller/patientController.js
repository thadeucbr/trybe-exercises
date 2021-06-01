const { Patients, Surgeries } = require('../models');
const getAllPatients = async (_req, res) => {
  try {
    const patients = await Patients.findAll({
      include: [{model: Surgeries, as: 'surgeries'}]
    });
    res.status(200).json(patients);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};
module.exports = {
  getAllPatients,
};