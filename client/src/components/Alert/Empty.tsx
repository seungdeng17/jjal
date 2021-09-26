import { GiEmptyMetalBucketHandle } from 'react-icons/gi';
import styled from 'styled-components';

export default function Empty() {
  return (
    <EmptyWrap>
      <GiEmptyMetalBucketHandle />
      <h1>등록된 데이터가 없습니다!</h1>
    </EmptyWrap>
  );
}

const EmptyWrap = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  svg {
    width: 200px;
    height: 200px;
    margin-bottom: 50px;
  }

  h1 {
    font-size: 1.5rem;
  }
`;
