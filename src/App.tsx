import styled from 'styled-components';

import { FiSearch } from 'react-icons/fi';
import { Button } from './components';

const AppBackground = styled.div`
  background-color: ${(props) => props.theme.colors.gray000};
`;

export default function App() {
  return (
    <AppBackground>
      <Button><FiSearch size={18} /></Button>
    </AppBackground>
  );
}
