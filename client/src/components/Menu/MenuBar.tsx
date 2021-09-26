import { useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import NavMenu from './NavMenu';

export default function MenuBar() {
  const [isShow, setShow] = useState(false);
  const onTrigger = () => setShow((isShow) => !isShow);
  const menuClassName = cn({
    'menu-show': isShow,
    'menu-close': !isShow,
  });

  return (
    <MenuBarWrap onClick={onTrigger}>
      <HamburgerIcon className={menuClassName}>
        <span />
      </HamburgerIcon>
      <NavMenu onTrigger={onTrigger} menuClassName={menuClassName} />
    </MenuBarWrap>
  );
}

const MenuBarWrap = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const HamburgerIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    margin: 3px 0;
  }

  span,
  &::before,
  &::after {
    content: '';
    display: inline-block;
    border-radius: 6px;
    width: 24px;
    height: 3px;
    background-color: #636e72;
    transition: transform 0.35s, opacity 0.25s;
    transform-origin: left;
  }

  &.menu-show {
    span {
      transform: translateX(10px);
      opacity: 0;
    }
    &::before {
      transform: rotate(45deg) translateY(-3.5px);
    }
    &::after {
      transform: rotate(-45deg) translateY(3.5px);
    }
  }

  &.menu-close {
    span {
      transform: translateX(0);
      opacity: 1;
    }
    &::before {
      transform: rotate(0);
    }
    &::after {
      transform: rotate(0);
    }
  }
`;
