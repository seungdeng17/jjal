import styled from 'styled-components';

type NavMenuListProps = {
  onTrigger: () => void;
};

export default function NavMenuList({ onTrigger }: NavMenuListProps) {
  return (
    <NavMenuListWrap>
      <li>a</li>
      <li>b</li>
    </NavMenuListWrap>
  );
}

const NavMenuListWrap = styled.ul`
  position: relative;
  top: 100px;
  z-index: 1200;
`;
