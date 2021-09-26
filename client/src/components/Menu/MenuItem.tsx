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
  font-size: 0.95rem;
  margin: 0 1.5rem;
  margin-bottom: 0.75rem;
  cursor: pointer;

  svg {
    margin-right: 4px;
  }

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

  @media (max-width: 600px) {
    font-size: 0.9rem;
    margin: 0 1.2rem;
    margin-bottom: 0.75rem;
    &::after {
      left: 1.2rem;
    }
  }

  @media (max-width: 400px) {
    font-size: 0.8rem;
    margin: 0 0.7rem;
    margin-bottom: 0.7rem;
    &::after {
      left: 0.7rem;
    }
  }
`;
