const express = require('express');
const { body } = require('express-validator');

const app = express();

const { loginMiddleware } = require('./src/middlewares');
const { loginController } = require('./src/controllers');
const { registerController } = require('./src/controllers');
const { getUser } = require('./src/controllers');
const { productController } = require('./src/controllers');
const { fieldValidator } = require('./src/middlewares');
const { updateUser } = require('./src/controllers/userController');
const { salesController } = require('./src/controllers');
const { orderController } = require('./src/controllers');

app.post('/login', loginMiddleware, loginController);

app.get('/', getUser);

app.put('/user', updateUser);

app.post(
  '/', body('name').isString().isLength({ min: 12 }),
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  fieldValidator,
  registerController,
);

app.get('/products', productController.getAllProducts);
app.post('/orders', orderController.getOrderByUser);
app.get('/orders/:id', orderController.getOrderById);
app.get('/sales/:id', salesController.getSaleById);

app.post(
  '/', body('name').isString().isLength({ min: 12 }),
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  fieldValidator,
  registerController,
);

app.post('/checkout', salesController.createSale);

module.exports = app;
