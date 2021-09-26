import { useRecoilValue } from 'recoil';
import { loginInfoState } from '@store/login';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';

export default function MyInfo() {
  const { name } = useRecoilValue(loginInfoState);
  if (!name) return null;

  return (
    <MyinfoWrap>
      <FcGoogle />
      <p>{name}</p>
    </MyinfoWrap>
  );
}

const MyinfoWrap = styled.div`
  position: absolute;
  bottom: 0;
  right: 20px;
  font-size: 12px;
  color: #9da5a8;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    margin-right: 1px;
  }
  p {
    padding-top: 3px;
  }

  :hover {
    color: #636e72;
    text-decoration: underline;
  }
`;
