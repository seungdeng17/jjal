import { useState, useRef } from 'react';
import { uploadImageFile, File } from '@util/aws';
import styled from 'styled-components';

import SearchBar from './SearchBar';
import MenuBar from '../Menu/MenuBar';
import MyInfo from './MyInfo';

export default function Header() {
  const [imgSrc, setImgSrc] = useState('');

  const imageFileRef = useRef<File>();
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    imageFileRef.current = e.target.files?.[0];
    setImgSrc(URL.createObjectURL(e.target.files?.[0]));
  };
  const handleUploadImage = () => uploadImageFile(imageFileRef.current as File);

  return (
    <HeaderWrap>
      {/* <div>
        <input type="file" accept=".gif,.jpg,.jpeg,.png" onChange={handleFileInput} />
        <p>업로드 이미지</p>
        <img style={{ display: 'block' }} src={imgSrc} />
        <button type="button" onClick={handleUploadImage}>
          이미지 전송
        </button>
      </div> */}
      <SearchBar />
      <MenuBar />
      <MyInfo />
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 10000;
`;
