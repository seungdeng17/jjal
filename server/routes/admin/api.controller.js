const Admin = require('../../model/admin');

// [PUT] 어드민 로그인
exports.login = async (req, res) => {
  const { email, token } = req.query;
  if (!email || !token) return res.status(200).json({ resultCode: -1, data: '필수 정보 누락' });

  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(200).json({ resultCode: -1, data: '조회할 수 없는 관리자 정보 입니다.' });

  await Admin.findOneAndUpdate({ email }, { token });
  return res.status(200).json({ resultCode: 200 });
};

// [GET] 임시 이미지 목록
exports.tempImage = async (req, res) => {
  return res.status(200).json({ resultCode: 200 });
};
