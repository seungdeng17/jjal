const ConfirmImage = require('../../model/confirmImage');
const User = require('../../model/user');
const { verifyIdToken } = require('../../util/util');

// [POST] 로그인
exports.login = async (req, res) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(200).json({ resultCode: -1, data: '필수 정보 누락' });

  const { email, sub } = await verifyIdToken(token);

  const user = await User.findOne({ email });
  if (user) return res.status(200).json({ resultCode: 200, data: { name: user.name, isAdmin: user.isAdmin } });

  const newUser = new User({
    email: email,
    name: sub,
    isAdmin: false,
  });
  await newUser.save();
  return res.status(200).json({ resultCode: 200, data: { name: sub, isAdmin: false } });
};

// [POST] 이미지 등록 요청
exports.confirmImage = async (req, res) => {
  const { key, image_url, tag } = req.body;
  if (!key || !image_url || !tag) return res.status(200).json({ resultCode: -1, data: '필수 정보 누락' });

  const newConfirmImage = new ConfirmImage({
    key: key,
    image_url: image_url,
    tag: tag,
    date: new Date(),
  });

  await newConfirmImage.save();
  return res.status(200).json({ resultCode: 200 });
};
