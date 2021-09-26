import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

export default function SkeletonBox() {
  return (
    <>
      <SkeletonBoxWrap>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </SkeletonBoxWrap>
    </>
  );
}

const SkeletonBoxWrap = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, 1fr);
  .react-loading-skeleton {
    height: 275px;
  }

  @media (max-width: 1300px) {
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    .react-loading-skeleton {
      height: 225px;
    }
  }

  @media (max-width: 700px) {
    gap: 17.5px;
    grid-template-columns: repeat(2, 1fr);
    .react-loading-skeleton {
      height: 200px;
    }
  }
`;
