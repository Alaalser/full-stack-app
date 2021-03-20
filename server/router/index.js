const router = require('express').Router();
const { addUser, login, logout } = require('../controllers');

router.get('/', (req, res) => {
  res.json({ msg: 'Hello' });
});
router.post('/signup', addUser);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;
