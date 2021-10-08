import { ReactNode } from 'react';
import styled, { css, keyframes } from 'styled-components';

const Hoverble = styled.div`
  position: relative;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const TooltipContent = styled.div<{ chart?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 4px 8px rgba(42, 22, 104, 0.15);
  border-radius: 4px;

  font-size: 14px;
  font-weight: bold;

  padding: 8px;

  ${(props) => (
    props.chart
      ? css`
        position: static;
        transform: translate(-75%, -175%);
      `
      : css`
        transform: translate(-50%, -50%);
        position: absolute;
        left: 50%;
        top: -40%;
        display: none;
        ${Hoverble}:hover & {
          display: flex;
          opacity: 1;
          animation: ${fadeIn} .5s;
        }
      `
  )}

  z-index: 100;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-width: 8px;
    border-style: solid;
    border-color: transparent ${(props) => props.theme.colors.primary} transparent transparent;
    top: 95%;
    transform: rotate(270deg);
    z-index: 100;
  }
`;

type Props = {
  children?: ReactNode;
  content?: string;
  chart?: boolean;
}

export default function Tooltip(props : Props) {
  const { children, content, chart } = props;
  return (
    <Hoverble>
      <TooltipContent chart={chart}>{content}</TooltipContent>
      {children}
    </Hoverble>
  );
}

Tooltip.defaultProps = {
  children: undefined,
  content: 'Tooltip',
  chart: false,
};
