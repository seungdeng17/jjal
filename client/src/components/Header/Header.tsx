import { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { loginState, adminState } from '@/store/login';
import { uploadImageFile, File } from '@util/aws';

import Login from '@components/Button/Login';
import Logout from '@components/Button/Logout';

export default function Header() {
  const isLogin = useRecoilValue(loginState);
  const isAdmin = useRecoilValue(adminState);

  const imageFileRef = useRef<File>();
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => (imageFileRef.current = e.target.files?.[0]);
  const handleUploadImage = () => uploadImageFile(imageFileRef.current as File);

  return (
    <div>
      <input type="file" accept=".gif,.jpg,.jpeg,.png" onChange={handleFileInput} />
      <button type="button" onClick={handleUploadImage}>
        이미지 전송
      </button>
      <div>{isAdmin ? '나는 운영자다' : '나는 유저다'}</div>
      {isLogin ? <Logout /> : <Login />}
    </div>
  );
}
