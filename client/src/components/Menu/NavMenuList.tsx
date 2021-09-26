import { useRecoilValue } from 'recoil';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { loginState, adminState } from '@/store/login';
import { FiUpload, FiCheckCircle, FiTag, FiLogOut } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

import MenuItem from './MenuItem';
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
      <MenuItem title="짤 등록" icon={<FiUpload />} onClick={() => onHistoryPush('/')} />
      {isAdmin && (
        <MenuItem title="등록 요청 목록" icon={<FiCheckCircle />} onClick={() => onHistoryPush('/confirm')} />
      )}
      <MenuItem title="태그 목록" icon={<FiTag />} onClick={() => onOpenModal('')} />
      <MenuItem
        title={isLogin ? <Logout /> : <Login />}
        icon={isLogin ? <FiLogOut /> : <FcGoogle />}
        onClick={onTrigger}
      />
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
