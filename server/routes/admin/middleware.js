const Admin = require('../../model/admin');

const adminMiddleware = async (req, res, next) => {
  const email = req.query.email;
  const token = req.headers['x-access-token'] || req.query.token;
  if (!email || !token) return res.status(200).json({ resultCode: -1, data: '필수 정보 누락' });

  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(200).json({ resultCode: -1, data: '조회할 수 없는 관리자 정보 입니다.' });
  if (token !== admin.token) return res.status(200).json({ resultCode: -1, data: '토큰 정보가 올바르지 않습니다.' });

  next();
};

module.exports = adminMiddleware;
