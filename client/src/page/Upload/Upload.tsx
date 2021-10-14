import { useState, useRef } from 'react';
import { uploadImageFile, File } from '@util/aws';

import Content from '@components/Layout/Content';

export default function Upload() {
  const [imgSrc, setImgSrc] = useState('');

  const imageFileRef = useRef<File>();
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    imageFileRef.current = e.target.files?.[0];
    setImgSrc(URL.createObjectURL(e.target.files?.[0]));
  };
  const handleUploadImage = () => uploadImageFile(imageFileRef.current as File);

  return (
    <Content>
      <div>
        <input type="file" accept=".gif,.jpg,.jpeg,.png" onChange={handleFileInput} />
        <p>업로드 이미지</p>
        <img style={{ display: 'block' }} src={imgSrc} />
        <button type="button" onClick={handleUploadImage}>
          이미지 전송
        </button>
      </div>
    </Content>
  );
}
