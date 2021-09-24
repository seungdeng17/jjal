import cn from 'classnames';
import styled from 'styled-components';
import { SideMenuProps, SideMenuWrap } from './SideMenu';

export default function SideMenuList({ isShow, onTrigger }: SideMenuProps) {
  const sideMenuClassName = cn({
    'menu-show': isShow,
    'menu-close': !isShow,
  });

  const onClickSideMenuList = (e: React.MouseEvent<HTMLUListElement>) => {
    e.stopPropagation();
  };

  return (
    <SideMenuListWrap className={sideMenuClassName} isShow={isShow} onClick={onClickSideMenuList}></SideMenuListWrap>
  );
}

const SideMenuListWrap = styled.ul<SideMenuWrap>`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  z-index: 1001;
  transform: translateX(250px);
  transition: transform 0.7s;
  background-color: #fff;
  border-left: 1px solid #dfe1e5;

  &.menu-show {
    transform: translateX(0);
  }
  &.menu-close {
    transform: translateX(250px);
  }
`;
