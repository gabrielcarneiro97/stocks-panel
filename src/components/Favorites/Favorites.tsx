import styled, { useTheme } from 'styled-components';
import { EmptyState, ProfileBar } from 'components';
import { useSelector } from 'react-redux';
import { selectors } from 'store';
import { FiStar } from 'react-icons/fi';
import { FavoriteStockCard } from './components';

import emptyStateImg from './assets/empty-state.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  background-color: ${(props) => props.theme.colors.white};
  margin: -8px;
  margin-left: 12px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-left: 16px;
  margin-top: 16px;
`;

const Cards = styled.div<{ isEmpty: boolean }>`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  height: ${(props) => (props.isEmpty ? '65vh' : '85vh')};
  justify-content: ${(props) => (props.isEmpty ? 'center' : 'normal')};;

  overflow-y: scroll;
  scroll-behavior: smooth;

  margin-right: 2px;

  & > div {
    margin-bottom: 16px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.gray002};
    border-radius: 10px;
    cursor: pointer;
  }
`;

export default function Favorites() {
  const favorites = useSelector(selectors.favorites.getCompanies);
  const theme = useTheme();

  return (
    <Container>
      <ProfileBar />
      <Title>
        <FiStar size={18} color={theme.colors.primary} style={{ marginRight: 3 }} />
        {' '}
        Favoritos
      </Title>
      <Cards isEmpty={favorites.length === 0}>
        {
          favorites.map(
            (comp) => (
              <FavoriteStockCard
                key={comp.symbol}
                companyName={comp.name}
                symbol={comp.symbol}
                logoSrc={comp.logoSrc}
                changeValue={comp.changeValue}
              />
            ),
          )
        }
        {
          favorites.length === 0
          && (
          <EmptyState
            img={emptyStateImg}
            imgHeight="30vh"
            text="Nenhuma empresa foi adicionada aos favoritos!"
          />
          )
        }
      </Cards>

    </Container>
  );
}
