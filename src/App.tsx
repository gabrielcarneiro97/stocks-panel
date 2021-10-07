import styled from 'styled-components';

import { StockCard } from './components';

const AppBackground = styled.div`
  background-color: ${(props) => props.theme.colors.gray000};
`;

function App() {
  return (
    <AppBackground>
      <StockCard variation="positive" />
    </AppBackground>
  );
}

export default App;
