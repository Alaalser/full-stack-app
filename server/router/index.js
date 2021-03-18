const router = require('express').Router();
const { addUser, login } = require('../controllers');

router.get('/', (req, res) => {
  res.json({ msg: 'Hello' });
});
router.post('/signup', addUser);
router.post('/login', login);

module.exports = router;
