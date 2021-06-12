const connection = require('./connection');
require('dotenv').config();

const savePurchases = async (objSales) => {
  const [sales] = await connection.execute(
    `INSERT INTO Trybeer.sales (
          user_id, total_price, delivery_address, delivery_number, sale_date, status) 
              VALUES ("${objSales.userId}","${objSales.totalPrice}"
              ,"${objSales.deliveryAddress}","${objSales.deliveryNumber}"
              ,CURRENT_DATE(), "${objSales.status}")`,
  );
  return sales;
};

const getSaleById = async (id) => {
  const [data] = await connection.execute(
    `SELECT * FROM Trybeer.sales AS s WHERE s.id = ${id}`,
  );
  return data[0];
};

module.exports = {
  savePurchases,
  getSaleById,
};
