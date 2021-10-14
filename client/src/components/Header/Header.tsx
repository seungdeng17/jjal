import styled from 'styled-components';

import SearchBar from './SearchBar';
import MenuBar from '../Menu/MenuBar';
import MyInfo from './MyInfo';

export default function Header() {
  return (
    <HeaderWrap>
      <SearchBar />
      <MenuBar />
      <MyInfo />
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 10000;
`;
