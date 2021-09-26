const User = require('../../model/user');
const { verifyIdToken } = require('../../util/util');

const middleware = async (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(200).json({ resultCode: -1, data: '필수 정보 누락' });

  const { email, exp } = await verifyIdToken(token);

  const user = await User.findOne({ email });
  if (!user) return res.status(200).json({ resultCode: -1, data: '조회할 수 없는 사용자' });
  if (!user.isAdmin) return res.status(200).json({ resultCode: -1, data: '관리자 권한이 없습니다.' });

  const now = parseInt(new Date().getTime() / 1000);
  if (now > exp) return res.status(200).json({ resultCode: -1, data: '토큰 만료' });

  next();
};

module.exports = middleware;
