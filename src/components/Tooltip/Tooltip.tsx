import { ReactNode } from 'react';
import styled from 'styled-components';

const Hoverble = styled.div`
  position: relative;
`;

const TooltipContent = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  padding-top: 0;
  padding-bottom: 0;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 4px 8px rgba(42, 22, 104, 0.15);
  border-radius: 4px;

  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};

  left: 50%;
  top: -50%;
  height: auto;
  width: auto;

  transform: translate(-50%,-50%);

  z-index: 999;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-width: 8px;
    border-style: solid;
    border-color: transparent ${(props) => props.theme.colors.primary} transparent transparent;
    top: 98%;
    transform: rotate(270deg);
    z-index: 999;
  }
`;

type Props = {
  children?: ReactNode;
  content?: string;
}

export default function Tooltip(props : Props) {
  const { children, content } = props;
  return (
    <Hoverble>
      <TooltipContent>{content}</TooltipContent>
      {children}
    </Hoverble>
  );
}

Tooltip.defaultProps = {
  children: undefined,
  content: 'Tooltip',
};
