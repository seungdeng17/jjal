import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

AWS.config.update({
  region: process.env.REACT_APP_AWS_BUCKET_REGION,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: process.env.REACT_APP_AWS_IDENTITY_POOL_ID as string,
  }),
});

export type File = {
  lastModified: number;
  lastModifiedDate: {};
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
};

export const uploadImageFile = async (file: File) => {
  try {
    const type = file?.type.match(/png|jpg|jpeg|gif/);
    if (!type) throw new Error('확장자가 올바르지 않습니다.');
    const key = `${uuidv4()}.${type[0]}`;

    await new AWS.S3.ManagedUpload({
      params: {
        Bucket: process.env.REACT_APP_AWS_BUCKET_NAME as string,
        Key: key,
        Body: file,
      },
    }).promise();

    alert('이미지 업로드에 성공했습니다.');
  } catch (e) {
    alert(`에러가 발생했습니다. ${e.message}`);
  }
};
