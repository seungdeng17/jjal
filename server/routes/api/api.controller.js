const Image = require('../../models/image');

// [POST] 이미지 등록 요청
exports.image = async (req, res) => {
  const { key, image_url } = req.query;
  if (!key || !image_url) return res.status(200).json({ resultCode: -1, data: '필수 정보 누락' });

  const image = new Image({
    key: key,
    image_url: image_url,
    tag: [],
    like_cnt: 0,
    like_ip: [],
    accept: false,
    date: new Date(),
  });

  await image.save();
  return res.status(200).json({ resultCode: 200 });
};
