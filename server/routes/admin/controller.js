const Admin = require('../../model/admin');

// [PUT] 어드민 로그인
exports.login = async (req, res) => {
  const { email, token } = req.body;
  await Admin.findOneAndUpdate({ email }, { token });
  return res.status(200).json({ resultCode: 200 });
};

// [PUT] 어드민 로그아웃
exports.logout = async (req, res) => {
  const { email, token } = req.body;
  await Admin.findOneAndUpdate({ email, token }, { token: '' });
  return res.status(200).json({ resultCode: 200 });
};

// [GET] 임시 이미지 목록
exports.tempImage = async (req, res) => {
  return res.status(200).json({ resultCode: 200 });
};
