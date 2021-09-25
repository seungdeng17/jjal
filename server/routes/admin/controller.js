const AWS = require('aws-sdk');
const ConfirmImage = require('../../model/confirmImage');
const Image = require('../../model/image');

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});
const s3 = new AWS.S3();

// [GET] 등록 요청 이미지 목록
exports.confirmImage = async (req, res) => {
  const data = await ConfirmImage.find();
  return res.status(200).json({ resultCode: 200, data });
};

// [DELETE] 이미지 삭제
exports.deleteImage = async (req, res) => {
  const { key, type } = req.query;

  await s3.deleteObject(
    {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key,
    },
    (e) => {
      if (e) throw e;
    }
  );

  if (type === 'confirm') await ConfirmImage.deleteOne({ key });
  else if (type === 'normal') await Image.deleteOne({ key });

  return res.status(200).json({ resultCode: 200 });
};
