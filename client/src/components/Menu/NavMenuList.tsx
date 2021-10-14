import { useRecoilValue } from 'recoil';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { loginState, loginInfoState } from '@/store/login';
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
  const { isAdmin } = useRecoilValue(loginInfoState);

  const onHistoryPush = (path: string) => {
    history.push(path);
    onTrigger();
  };
  const onOpenModal = (id: string) => {
    console.log('태그 목록 모달', id);
    onTrigger();
  };
  const onClickIcon = (e: React.MouseEvent<HTMLOrSVGElement>) => e.stopPropagation();

  return (
    <NavMenuListWrap>
      <MenuItem title="짤 등록" icon={<FiUpload />} onClick={() => onHistoryPush('/upload')} />
      {isAdmin && (
        <MenuItem title="등록 요청 목록" icon={<FiCheckCircle />} onClick={() => onHistoryPush('/confirm')} />
      )}
      <MenuItem title="태그 목록" icon={<FiTag />} onClick={() => onOpenModal('')} />
      <MenuItem
        title={isLogin ? <Logout /> : <Login />}
        icon={isLogin ? <FiLogOut onClick={onClickIcon} /> : <FcGoogle onClick={onClickIcon} />}
        onClick={onTrigger}
      />
    </NavMenuListWrap>
  );
}

const NavMenuListWrap = styled.ul`
  z-index: 1200;
  display: flex;
  flex-wrap: wrap;
`;
