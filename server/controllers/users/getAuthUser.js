const { getUserInfoById } = require('../../database/queries');

const getAuthUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const {
      rows: [userData],
    } = await getUserInfoById({ userId });
    res.json({ statusCode: 200, data: { ...userData } });
    console.log(userId);
  } catch (err) {
    next(err);
  }
};

module.exports = getAuthUser;
