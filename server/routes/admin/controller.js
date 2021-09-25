const ConfirmImage = require('../../model/confirmImage');

// [GET] 등록 요청 이미지 목록
exports.confirmImage = async (req, res) => {
  const data = await ConfirmImage.find();
  return res.status(200).json({ resultCode: 200, data });
};
