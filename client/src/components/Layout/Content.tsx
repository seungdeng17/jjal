import styled from 'styled-components';

type ContentProps = {
  children: React.ReactNode;
};

export default function Content({ children }: ContentProps) {
  return <ContentWrap>{children}</ContentWrap>;
}

const ContentWrap = styled.div`
  position: relative;
  top: 80px;
  padding: 30px 20px;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 100px;
`;
