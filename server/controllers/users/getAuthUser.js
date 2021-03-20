const { getUserInfoById } = require('../../database/queries');

const getAuthUser = async (req, res, next) => {
  try {
    const { userId } = req;
    const {
      rows: [userData],
    } = await getUserInfoById(userId);

    res.json({ statusCode: 200, data: { ...userData } });
  } catch (err) {
    next(err);
  }
};

module.exports = getAuthUser;
