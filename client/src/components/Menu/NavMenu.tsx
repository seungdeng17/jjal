import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

import NavMenuList from './NavMenuList';

type NavMenuProps = {
  isShow: boolean;
  onTrigger: () => void;
  menuClassName: string;
};

export default function NavMenu({ isShow, onTrigger, menuClassName }: NavMenuProps) {
  const onClickContainer = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation();

  return ReactDOM.createPortal(
    <NavMenuWrap className={menuClassName}>
      <NavMenuContainer onClick={onClickContainer} className={menuClassName}>
        <NavMenuList onTrigger={onTrigger} />
      </NavMenuContainer>
    </NavMenuWrap>,
    document.getElementById('menu') as HTMLElement
  );
}

const NavMenuWrap = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  transition: background-color 0.3s;

  &.menu-show {
    background-color: rgba(0, 0, 0, 0.2);
    pointer-events: auto;
  }
  &.menu-close {
    background-color: transparent;
    pointer-events: none;
  }
`;

const NavMenuContainer = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: fit-content;
  padding: 20px 0 10px 0;
  z-index: 1100;
  background-color: #fff;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);
  transition: transform 0.5s, opacity 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  &.menu-show {
    transform: translateY(0);
  }
  &.menu-close {
    transform: translateY(-80px);
    pointer-events: none;
  }
`;
