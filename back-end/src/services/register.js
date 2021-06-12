const modelRegister = require('../models/Register');
const userFind = require('../models/Register');
const errorGenerator = require('../helpers/errorGenerator');
const messageError = require('../helpers/message.json');
const errorCode = require('../helpers/status.json');

const getUser = async (email) => {
  const user = await userFind.getUser(email);
  return user;
};

const register = async (name, email, password, checked) => {
  let role = 'administrator';
  const empty = 0;

  if (!checked) role = 'client';

  const userExists = await userFind.getUser(email);

  if (userExists.length === empty) {
    const user = await modelRegister.register(name, email, password, role);
    return user;
  }

  return errorGenerator(errorCode.Unauthorized, messageError.same_user);
};

module.exports = {
  register,
  getUser,
};
