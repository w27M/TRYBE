const productModel = require('../models/Product');
const { messageSuccess } = require('../helpers/responseMessage');
const httpStatus = require('../helpers/HttpStatus');

const getAllProducts = async () => {
  const data = await productModel.getAllProducts();
  return messageSuccess(data, httpStatus.OK);
};

module.exports = {
  getAllProducts,
};
