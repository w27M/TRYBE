const productService = require('../services/productService');
const HttpStatus = require('../helpers/HttpStatus');

const getAllProducts = async (req, res) => {
  try {
    const result = await productService.getAllProducts();
    res.status(result.statusCode).json(result.data);
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
};
