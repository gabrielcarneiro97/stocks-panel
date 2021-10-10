import styled from 'styled-components';

import { Favorites, MainContent, SideMenu } from './components';

const AppBackground = styled.div`
  display: flex;
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
