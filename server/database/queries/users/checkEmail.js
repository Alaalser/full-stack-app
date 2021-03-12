const { connection } = require('../../data');

const checkEmail = ({ email }) => {
  console.log(email);
  const sql = {
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email],
  };
  return connection.query(sql);
};

module.exports = checkEmail;
