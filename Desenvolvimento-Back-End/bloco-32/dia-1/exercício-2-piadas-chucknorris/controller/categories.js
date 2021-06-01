const { getCategories } = require('../model/categories');

const getAllCategories = async (_req, res) => {
  try {
    const categories = await getCategories();
    res.render('./categories', { categories });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getAllCategories,
};
