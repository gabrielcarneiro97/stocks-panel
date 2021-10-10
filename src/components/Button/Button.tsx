import { forwardRef, MouseEventHandler, ReactNode } from 'react';
import styled, { css } from 'styled-components';

type ButtonVariants = 'primary' | 'secondary' | 'success' | 'danger' | 'white';

type StyledProps = { variant? : ButtonVariants, disabled? : boolean };

const StyledButton = styled.button<StyledProps>`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 8px;
  padding: 10px;
  transition-duration: .2s;

  ${(props) => (props.disabled
    ? css`
      color: ${props.theme.colors.gray002};
      background-color: ${props.theme.colors.gray004};
    `
    : css`
      cursor: pointer;
      color: ${(props.variant === 'white' ? props.theme.colors.primary : props.theme.colors.white)};
      background-color: ${props.theme.colors[props.variant ?? 'primary']};

      &:hover {
        opacity: .7;
      }

      &:active {
        opacity: .9;
      }

    `
  )};
`;

type Props = {
  children?: ReactNode,
  onClick?: MouseEventHandler<HTMLButtonElement>,
} & StyledProps;

const Button = forwardRef<HTMLButtonElement, Props>((props : Props, ref) => {
  const {
    children, onClick, disabled, variant,
  } = props;
  return (
    <StyledButton
      onClick={(e) => {
        if (!disabled && onClick) onClick(e);
      }}
      disabled={disabled}
      variant={variant}
      ref={ref}
    >
      {children}
    </StyledButton>
  );
});

Button.defaultProps = {
  children: undefined,
  onClick: undefined,
  variant: 'primary',
  disabled: false,
};

export default Button;
