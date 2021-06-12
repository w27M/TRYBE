const connection = require('./connection');
require('dotenv').config();

const getAllProducts = async () => {
  const [data] = await connection.execute(
    'SELECT * FROM Trybeer.products',
  );

  return data.map(({ id, url_image: imagem, name, price }) => ({
    id,
    imagem,
    nome: name,
    preco: price,
  }));
};

module.exports = {
  getAllProducts,
};
