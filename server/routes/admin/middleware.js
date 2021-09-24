const Admin = require('../../model/admin');

let timeoutId;

const adminSessionTimmer = (token) => {
  if (timeoutId) clearTimeout(timeoutId);
  timeoutId = setTimeout(async () => {
    await Admin.findOneAndUpdate({ token }, { token: '' });
  }, 1000 * 60 * 30);
};

exports.adminLoginMiddleware = async (req, res, next) => {
  const email = req.body.email;
  const token = req.headers['x-access-token'];
  if (!email || !token) return res.status(200).json({ resultCode: -1, data: '필수 정보 누락' });

  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(200).json({ resultCode: -1, data: '조회할 수 없는 관리자 정보' });

  req.body.token = token;
  adminSessionTimmer(token);
  next();
};

exports.adminMiddleware = async (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(200).json({ resultCode: -1, data: '필수 정보 누락' });

  const admin = await Admin.findOne({ token });
  if (!admin || !admin?.token) return res.status(200).json({ resultCode: -1, data: '조회할 수 없는 관리자 정보' });
  if (token !== admin.token) return res.status(200).json({ resultCode: -1, data: '토큰 정보가 올바르지 않습니다.' });

  adminSessionTimmer(token);
  next();
};
