import { useState, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { loginState, adminState } from '@/store/login';
import { uploadImageFile, File } from '@util/aws';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import Login from '@components/Button/Login';
import Logout from '@components/Button/Logout';

import SearchBar from './SearchBar';
import MenuBar from '../Menu/MenuBar';

export default function Header() {
  const history = useHistory();
  const isLogin = useRecoilValue(loginState);
  const isAdmin = useRecoilValue(adminState);
  const [imgSrc, setImgSrc] = useState('');

  const imageFileRef = useRef<File>();
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    imageFileRef.current = e.target.files?.[0];
    setImgSrc(URL.createObjectURL(e.target.files?.[0]));
  };
  const handleUploadImage = () => uploadImageFile(imageFileRef.current as File);
  const handleClickTempImage = () => history.push('/temp-image');

  return (
    // <div>
    //   <input type="file" accept=".gif,.jpg,.jpeg,.png" onChange={handleFileInput} />
    //   <p>업로드 이미지</p>
    //   <img style={{ display: 'block' }} src={imgSrc} />
    //   <button type="button" onClick={handleUploadImage}>
    //     이미지 전송
    //   </button>
    //   <div>{isAdmin ? '나는 운영자다' : '나는 유저다'}</div>
    //   {isLogin ? <Logout /> : <Login />}
    //   <button onClick={handleClickTempImage}>임시 이미지</button>
    // </div>
    <HeaderWrap>
      <SearchBar />
      <MenuBar />
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
