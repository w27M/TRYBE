const saleService = require('../services/salesService');
const httpStatus = require('../helpers/HttpStatus');

const createSale = async (req, res) => {
  const { userId, totalPrice, deliveryAddress, deliveryNumber, status, cart } = req.body;

  const payload = {
    userId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
    cart,
  };

  await saleService.saveSales(payload);

  return res.status(201).json({ message: 'Compra realizada com sucesso!' });
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  saleService.getSaleById(id)
    .then((result) => {
      res.status(httpStatus.OK).json(result);
    })
    .catch((err) => console.log(`error in controller getOrderByUser: ${err} `));
};

module.exports = {
  createSale,
  getSaleById,
};
