const TempImage = require('../../model/tempImage');

// [POST] 임시 이미지 등록 요청
exports.tempImage = async (req, res) => {
  const { key, image_url, tag } = req.body;
  if (!key || !image_url || !tag) return res.status(200).json({ resultCode: -1, data: '필수 정보 누락' });

  const tempImage = new TempImage({
    key: key,
    image_url: image_url,
    tag: tag,
    date: new Date(),
  });

  await tempImage.save();
  return res.status(200).json({ resultCode: 200 });
};
