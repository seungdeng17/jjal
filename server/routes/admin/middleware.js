const Admin = require('../../model/admin');

exports.adminLoginMiddleware = async (req, res, next) => {
  const { email, token } = req.query;
  if (!email || !token) return res.status(200).json({ resultCode: -1, data: '필수 정보 누락' });

  const { baseUrl } = req;
  const option = baseUrl.match(/logout/) ? { email, token } : { email };
  const admin = await Admin.findOne(option);
  if (!admin) return res.status(200).json({ resultCode: -1, data: '조회할 수 없는 관리자 정보' });

  next();
};

exports.adminMiddleware = async (req, res, next) => {
  const email = req.query.email;
  const token = req.headers['x-access-token'] || req.query.token;
  if (!email || !token) return res.status(200).json({ resultCode: -1, data: '필수 정보 누락' });

  const admin = await Admin.findOne({ email });
  if (!admin || !admin?.token) return res.status(200).json({ resultCode: -1, data: '조회할 수 없는 관리자 정보' });
  if (token !== admin.token) return res.status(200).json({ resultCode: -1, data: '토큰 정보가 올바르지 않습니다.' });

  next();
};
