import styled from 'styled-components';

type ButtonVariants = 'primary' | 'secondary' | 'success' | 'danger' | 'white';

const Button = styled.button<{ variant? : ButtonVariants }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors[props.variant ?? 'primary']};
  border: none;
  border-radius: 8px;
  padding: 10px;
  transition-duration: .2s;

  &:hover {
    opacity: .7;
  }

  &:active {
    opacity: .9;
  }
`;

export default Button;
