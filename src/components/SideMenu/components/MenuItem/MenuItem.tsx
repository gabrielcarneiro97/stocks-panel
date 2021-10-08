import { MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 48px;
  margin-bottom: 8px;
  cursor: pointer;

  transition-duration: .2s;

`;

const LeftMarker = styled.div<{ active?: boolean }>`
  background-color: ${(props) => props.active && props.theme.colors.secondary};
  height: 100%;
  width: 4px;
  border-radius: 0px 12px 12px 0px;

  transition-duration: .2s;
  ${Container}:hover & {
    opacity: .7;
    background-color: ${(props) => props.theme.colors.secondary};
  }

  ${Container}:active & {
    opacity: .9;
  }

`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-left: -5.5px;
`;

type Props = {
  active?: boolean;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export default function MenuItem(props : Props) {
  const { active, children, onClick } = props;
  return (
    <Container onClick={onClick}>
      <LeftMarker active={active} />
      <Content>
        {children}
      </Content>
    </Container>
  );
}

MenuItem.defaultProps = {
  active: false,
  children: undefined,
  onClick: () => undefined,
};
