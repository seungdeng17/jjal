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
    height: 250px;
  }

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
    .react-loading-skeleton {
      height: 200px;
    }
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    .react-loading-skeleton {
      height: 175px;
    }
  }
`;
