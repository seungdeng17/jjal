import { useRecoilValue } from 'recoil';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { loginState, adminState } from '@/store/login';

import Login from '@components/Button/Login';
import Logout from '@components/Button/Logout';

type NavMenuListProps = {
  onTrigger: () => void;
};

export default function NavMenuList({ onTrigger }: NavMenuListProps) {
  const history = useHistory();
  const isLogin = useRecoilValue(loginState);
  const isAdmin = useRecoilValue(adminState);

  const onHistoryPush = (path: string) => {
    history.push(path);
    onTrigger();
  };
  const onOpenModal = (id: string) => {
    console.log('태그 목록 모달', id);
    onTrigger();
  };

  return (
    <NavMenuListWrap>
      <li onClick={() => onHistoryPush('/')}>짤 올리기</li>
      {isAdmin && <li onClick={() => onHistoryPush('/confirm')}>등록 요청 목록</li>}
      <li onClick={() => onOpenModal('')}>태그 목록</li>
      <li onClick={onTrigger}>{isLogin ? <Logout /> : <Login />}</li>
    </NavMenuListWrap>
  );
}

const NavMenuListWrap = styled.ul`
  z-index: 1200;
  display: flex;
  flex-wrap: wrap;

  li {
    font-size: 0.95rem;
    margin: 0 1.5rem;
    margin-bottom: 0.75rem;
    cursor: pointer;

    :hover {
      color: #1e90ff;
    }

    &::after {
      position: relative;
      left: 1.5rem;
      content: '';
      display: inline-block;
      border-right: 1px solid #ccc;
      height: 12px;
    }

    &:last-child {
      &::after {
        display: none;
      }
    }
  }
`;
