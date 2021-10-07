import { forwardRef, useState, ChangeEventHandler } from 'react';
import styled from 'styled-components';

const InnerInput = styled.input`
  background: none;
  border: none;
  width: 100%;
  &:focus-visible {
    outline: none;
  }
`;

const Wrapper = styled.div<{ focus: boolean }>`
  display: flex;
  align-content: center;
  background-color: ${(props) => props.theme.colors.white};
  border: ${(props) => (props.focus ? `2px solid ${props.theme.colors.gray003}` : `2px solid ${props.theme.colors.gray004}`)};
  border-radius: 8px;
  padding: 3px;
  padding-left: 5px;
`;

type Props = {
  value?: string | number | readonly string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, Props>((props : Props, ref) => {
  const { value, onChange, placeholder } = props;

  const [focus, setFocus] = useState(false);

  return (
    <Wrapper focus={focus}>
      <InnerInput
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        ref={ref}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
});

Input.defaultProps = {
  value: undefined,
  onChange: undefined,
  placeholder: undefined,
};

export default Input;
