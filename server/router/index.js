const router = require('express').Router();
const { addUser } = require('../controllers');

router.get('/', (req, res) => {
  res.json({ msg: 'Hello' });
});
router.post('/signup', addUser);

module.exports = router;
