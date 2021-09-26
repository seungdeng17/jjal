import { useState } from 'react';
import { request } from '@util/api';
import { useQuery } from 'react-query';

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

  const { isLoading } = useQuery('confirm-image', async () => {
    const { isSuccess, data } = await request({ url: '/admin/confirm-image' });
    if (!isSuccess) return;
    setConfirmImages((prev) => [...prev, ...data]);
  });

  if (isLoading) {
    return <Content>로딩</Content>;
  }

  if (!confirmImages.length)
    return (
      <Content>
        <Empty />
      </Content>
    );

  return (
    <Content>
      <ul>
        {confirmImages.map((data: ConfirmImage) => {
          const { key, image_url, tag } = data;
          return <ConfirmItem key={key} imageKey={key} imageUrl={image_url} tag={tag} />;
        })}
      </ul>
    </Content>
  );
}
