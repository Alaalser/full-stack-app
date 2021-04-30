const router = require('express').Router();
const {
  addUser,
  login,
  logout,
  getAuthUser,
  authorizedUser,
} = require('../controllers');
const { verifyUser } = require('../middleware/authentication');

router.get('/', (req, res) => {
  res.json({ msg: 'Hello' });
});
router.post('/signup', addUser);
router.post('/login', login);
router.use(verifyUser);
router.get('/is-auth', authorizedUser);
router.get('/logout', logout);
router.get('/:userId', getAuthUser);

module.exports = router;
