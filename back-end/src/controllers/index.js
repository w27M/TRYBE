const { loginController } = require('./loginController');
const { registerController } = require('./registerController');
const { getUser } = require('./registerController');
const orderController = require('./orderController');
const productController = require('./productController');
const salesController = require('./salesController');

module.exports = {
  loginController,
  registerController,
  getUser,
  productController,
  orderController,
  salesController,
};
