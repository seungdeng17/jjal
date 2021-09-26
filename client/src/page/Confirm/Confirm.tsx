import { useState, useEffect } from 'react';
import { request } from '@util/api';

import Content from '@components/Layout/Content';
import ConfirmItem from './ConfirmItem';
import Empty from '@components/Alert/Empty';

type ConfirmImage = {
  key: string;
  image_url: string;
  tag: string[];
  date: Date;
};

export default function Confirm() {
  const [confirmImages, setConfirmImages] = useState<ConfirmImage[]>([]);

  useEffect(() => {
    (async () => {
      const { isSuccess, data } = await request({ url: '/admin/confirm-image' });
      if (!isSuccess) return;
      setConfirmImages([...confirmImages, ...data]);
    })();
  }, []);

  if (!confirmImages.length)
    return (
      <Content>
        <Empty />
      </Content>
    );

  return (
    <Content>
      <ul>
        {confirmImages.map((data) => {
          const { key, image_url, tag } = data;
          return <ConfirmItem key={key} image_key={key} image_url={image_url} tag={tag} />;
        })}
      </ul>
    </Content>
  );
}
