import styled from 'styled-components';

import { Favorites, MainContent, SideMenu } from './components';

const AppBackground = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.gray000};
`;

export default function App() {
  return (
    <AppBackground>
      <SideMenu />
      <MainContent />
      <Favorites />
    </AppBackground>
  );
}
