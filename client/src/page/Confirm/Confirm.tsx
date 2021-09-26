import { useState } from 'react';
import { request } from '@util/api';
import { useQuery } from 'react-query';

import Content from '@components/Layout/Content';
import ConfirmItem from './ConfirmItem';
import SkeletonBox from '@components/Layout/SkeletonBox';
import Empty from '@components/Alert/Empty';

type ConfirmImage = {
  key: string;
  image_url: string;
  tag: string[];
  date: Date;
};

export default function Confirm() {
  const [confirmImages, setConfirmImages] = useState<ConfirmImage[]>([]);

  const { isFetching } = useQuery('confirm-image', async () => {
    const { isSuccess, data } = await request({ url: '/admin/confirm-image' });
    if (!isSuccess) return;
    setConfirmImages((prev) => [...prev, ...data]);
  });

  if (isFetching) {
    return (
      <Content>
        <SkeletonBox />
      </Content>
    );
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
