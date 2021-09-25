const ConfirmImage = require('../../model/confirmImage');

// [POST] 이미지 등록 요청
exports.confirmImage = async (req, res) => {
  const { key, image_url, tag } = req.body;
  if (!key || !image_url || !tag) return res.status(200).json({ resultCode: -1, data: '필수 정보 누락' });

  const confirmImage = new ConfirmImage({
    key: key,
    image_url: image_url,
    tag: tag,
    date: new Date(),
  });

  await confirmImage.save();
  return res.status(200).json({ resultCode: 200 });
};
