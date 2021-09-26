import styled from 'styled-components';

type MenuItemProps = {
  title: string | React.ReactNode;
  icon: React.ReactNode;
  onClick: () => void;
};

export default function MenuItem({ title, icon, onClick }: MenuItemProps) {
  return (
    <MenuItemWrap onClick={onClick}>
      {icon}
      {title}
    </MenuItemWrap>
  );
}

const MenuItemWrap = styled.li`
  display: flex;

  svg {
    margin-right: 4px;
  }
`;
