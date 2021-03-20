const router = require('express').Router();
const { addUser, login, logout, getAuthUser } = require('../controllers');
const { verifyUser } = require('../middleware/authentication');

router.get('/', (req, res) => {
  res.json({ msg: 'Hello' });
});
router.post('/signup', addUser);
router.post('/login', login);
router.post('/logout', logout);
router.get('/getAuthUser', verifyUser, getAuthUser);

module.exports = router;
