const userService = require('../services/user');

const updateUser = async (req, res) => {
  const { name, email } = req.body;
  const message = await userService.updateUser(name, email);
  res.status(200).json({ message });
};

module.exports = {
  updateUser,
};
