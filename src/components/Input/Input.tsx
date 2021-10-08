import {
  forwardRef, useState, ChangeEventHandler, ReactNode,
} from 'react';
import styled from 'styled-components';

const InnerInput = styled.input`
  background: none;
  border: none;
  width: 100%;
  margin-right: 5px;
  margin-left: 5px;
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
  height: 30px;
`;

type Props = {
  value?: string | number | readonly string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  addonAfter?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, Props>((props : Props, ref) => {
  const {
    value, onChange, placeholder, addonAfter,
  } = props;

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
      {addonAfter}
    </Wrapper>
  );
});

Input.defaultProps = {
  value: undefined,
  onChange: undefined,
  placeholder: undefined,
  addonAfter: undefined,
};

export default Input;
