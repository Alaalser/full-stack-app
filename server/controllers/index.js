const {
  addUser,
  login,
  logout,
  getAuthUser,
  authorizedUser,
} = require('./users');

module.exports = { addUser, login, logout, getAuthUser, authorizedUser };
