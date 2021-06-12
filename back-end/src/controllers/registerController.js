const registerService = require('../services/register');

const getUser = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const user = await registerService.getUser(email);
  res.status(200).json({ user });
};

const registerController = async (req, res) => {
  try {
    const { name, email, password, checked } = req.body;
    let role = 'administrator';
    if (!checked) role = 'client';
    const user = await registerService.register(name, email, password, checked);
    if (!user.code) {
      return res.status(201).json({ name,
email,
password,
role,
        messageSuccess: user.message,
        status: true,
      });
    }
    res.status(user.code).json({ messageFailed: user.message, status: false });
  } catch (error) {
    res.status(500).json({ messsage: error.messsage });
  }
};

module.exports = {
  registerController,
  getUser,
};
