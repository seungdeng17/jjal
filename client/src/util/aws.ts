import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { request } from './api';

AWS.config.update({
  region: process.env.REACT_APP_AWS_BUCKET_REGION,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: process.env.REACT_APP_AWS_IDENTITY_POOL_ID as string,
  }),
});

export type File = {
  lastModified: number;
  lastModifiedDate?: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath?: string;
};

export type Tags = String[];

export const uploadImageFile = async (file: File, tags: Tags = []) => {
  try {
    const type = file?.type.match(/png|jpg|jpeg|gif/);
    if (!type) throw new Error('파일이 올바르지 않습니다.');
    const key = `${uuidv4()}.${type[0]}`;

    const data = await new AWS.S3.ManagedUpload({
      params: {
        Bucket: process.env.REACT_APP_AWS_BUCKET_NAME as string,
        Key: key,
        Body: file,
      },
    }).promise();

    const { isSuccess } = await request({
      url: '/confirm-image',
      method: 'post',
      body: { key: data.Key, image_url: data.Location, tag: tags },
    });

    if (!isSuccess) return;
    alert('이미지 업로드에 성공했습니다.');
  } catch (e) {
    alert(`에러가 발생했습니다. ${e.message}`);
  }
};
