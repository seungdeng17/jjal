const ConfirmImage = require('../../model/confirmImage');
const Image = require('../../model/image');

const { deleteImageFile } = require('../../util/aws');

// [GET] 등록 요청 이미지 목록
exports.confirmImage = async (req, res) => {
  const data = await ConfirmImage.find();
  return res.status(200).json({ resultCode: 200, data });
};

// [DELETE] 이미지 삭제
exports.deleteImage = async (req, res) => {
  const { key, type } = req.query;

  await deleteImageFile(key);
  if (type === 'confirm') await ConfirmImage.deleteOne({ key });
  if (type === 'normal') await Image.deleteOne({ key });

  return res.status(200).json({ resultCode: 200 });
};
