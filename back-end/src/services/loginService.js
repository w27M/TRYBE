const { login } = require('../models/login');

const loginService = async (email, pass) => login(email, pass);

module.exports = { loginService };