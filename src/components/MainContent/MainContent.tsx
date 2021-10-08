import { FiGrid } from 'react-icons/fi';
import styled from 'styled-components';
import theme from '../../Theme';
import SearchBar from './components/SearchBar';

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
`;

export default function MainContent() {
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
    </Container>
  );
}
