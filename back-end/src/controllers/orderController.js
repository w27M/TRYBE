const orderService = require('../services/orderService');
const httpStatus = require('../helpers/HttpStatus');

const getOrderByUser = async (req, res) => {
  const { id } = req.body;
  orderService.getOrderByUserService(id)
    .then((result) => {
      res.status(httpStatus.OK).json(result);
    })
    .catch((err) => console.log(`error in controller getOrderByUser: ${err} `));
};

const getOrderById = async (req, res) => {
  const { id } = req.params;
  orderService.getOrderBySaleId(id)
    .then((result) => {
      res.status(httpStatus.OK).json(result);
    })
    .catch((err) => console.log(`error in controller getOrderByUser: ${err} `));
};

module.exports = {
  getOrderByUser,
  getOrderById,
};
