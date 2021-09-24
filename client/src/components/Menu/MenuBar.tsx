import { useState } from 'react';
import styled from 'styled-components';

import { GiHamburgerMenu } from 'react-icons/gi';
import SideMenu from './SideMenu';

export default function MenuBar() {
  const [isShow, setShow] = useState(false);
  const onTrigger = () => setShow((isShow) => !isShow);

  return (
    <MenuBarWrap>
      <GiHamburgerMenu onClick={onTrigger} className="menu-icon" />
      <SideMenu isShow={isShow} onTrigger={onTrigger} />
    </MenuBarWrap>
  );
}

const MenuBarWrap = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  .menu-icon {
    height: 25px;
    width: 25px;
    color: #636e72;
  }
`;
