const userModel = require('../models/User');
// const messageError = require('../helpers/message.json');
// const errorCode = require('../helpers/status.json');

const updateUser = async (name, email) => {
  const user = await userModel.updateUser(name, email);
  return user;
};

module.exports = {
  updateUser,
};