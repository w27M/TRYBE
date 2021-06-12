const jwt = require('jsonwebtoken');
const { loginService } = require('../services/loginService');
require('dotenv').config();

const SECRET_PASS = process.env.SECRET_PASS || 'bolinha';

const jwtConfig = {
  expiresIn: 60 * 60,
  algorithm: 'HS256',
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
   loginService(email, password)
    .then((result) => {
      if (result.length > 0) {
        const token = jwt.sign({ data: email }, SECRET_PASS, jwtConfig);
        return res.status(200).json({ token, data: result[0] });
      }
      return res.status(401).json({ message: 'unauthorized access' });
    })
    .catch((err) => console.log(`Error in controller login: ${err}`));
};

module.exports = { loginController };
