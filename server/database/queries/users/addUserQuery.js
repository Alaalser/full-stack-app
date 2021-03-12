const connection = require('../../data/connection');

const addUserQuery = (userName, email, password) => {
  const sql = {
    text:
      'INSERT INTO users(user_name,email,password) VALUES($1,$2,$3) RETURNING id, user_name, email;',
    values: [userName, email, password],
  };
  return connection.query(sql);
};

module.exports = addUserQuery;
