const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});
const s3 = new AWS.S3();

exports.deleteImageFile = async (key) => {
  try {
    return await s3.deleteObject(
      {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key,
      },
      (e) => {
        if (e) throw e;
      }
    );
  } catch (e) {
    console.log(`에러가 발생했습니다. ${e.message}`);
  }
};
