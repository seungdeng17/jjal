const Admin = require('../../model/admin');

// [GET] 임시 이미지 목록
exports.tempImage = async (req, res) => {
  return res.status(200).json({ resultCode: 200 });
};
