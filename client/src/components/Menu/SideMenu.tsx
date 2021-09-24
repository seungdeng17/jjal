import * as ReactDOM from 'react-dom';
import styled from 'styled-components';

import SideMenuList from './SideMenuList';

export type SideMenuProps = {
  isShow: boolean;
  onTrigger: () => void;
};

export type SideMenuWrap = {
  isShow: boolean;
};

export default function SideMenu({ isShow, onTrigger }: SideMenuProps) {
  return ReactDOM.createPortal(
    <SideMenuWrap onClick={onTrigger} isShow={isShow}>
      <SideMenuList isShow={isShow} onTrigger={onTrigger} />
    </SideMenuWrap>,
    document.getElementById('menu') as HTMLElement
  );
}

const SideMenuWrap = styled.div<SideMenuWrap>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  pointer-events: ${(props) => (props.isShow ? 'auto' : 'none')};
`;
