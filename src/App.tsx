import styled from 'styled-components';

import { SideMenu } from './components';

const AppBackground = styled.div`
  background-color: ${(props) => props.theme.colors.gray000};
`;

export default function App() {
  return (
    <AppBackground>
      <SideMenu />
    </AppBackground>
  );
}
