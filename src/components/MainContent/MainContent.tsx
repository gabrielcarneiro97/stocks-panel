import { FiGrid } from 'react-icons/fi';
import styled, { useTheme } from 'styled-components';
import Chart from './components/Chart/Chart';
import Recents from './components/Recents/Recents';
import SearchBar from './components/SearchBar/SearchBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 60vw;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 42px;
`;

const SearchContainer = styled.div`
  width: 20vw;
  margin-bottom: 30px;
`;

export default function MainContent() {
  const theme = useTheme();

  return (
    <Container>
      <TitleContainer>
        <FiGrid
          color={theme.colors.primary}
          size={32}
          style={{ marginRight: 10 }}
        />
        {' '}
        Dashboard
      </TitleContainer>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <Chart />
      <Recents />
    </Container>
  );
}
