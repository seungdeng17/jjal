import { useRef } from 'react';
import { uploadImageFile, File } from '@util/aws';

export default function Header() {
  const imageFileRef = useRef<File>();
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => (imageFileRef.current = e.target.files?.[0]);
  const handleUploadImage = () => uploadImageFile(imageFileRef.current as File);

  return (
    <div>
      <input type="file" accept=".gif,.jpg,.jpeg,.png" onChange={handleFileInput} />
      <button type="button" onClick={handleUploadImage}>
        이미지 전송
      </button>
    </div>
  );
}
