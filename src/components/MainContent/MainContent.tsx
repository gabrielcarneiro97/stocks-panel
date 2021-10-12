import { FiGrid } from 'react-icons/fi';
import styled, { useTheme } from 'styled-components';
import useCompaniesUpdate from 'hooks/useCompaniesUpdate';

import { Chart, Recents, SearchBar } from './components';

const Container = styled.div`
  display: flex;
  flex-grow: 6;
  flex-direction: column;
  padding: 24px;
  width: 60vw;
  background-color: ${(props) => props.theme.colors.gray000};
  border-top-left-radius: 24px;
  margin: -8px;
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
  useCompaniesUpdate();
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
