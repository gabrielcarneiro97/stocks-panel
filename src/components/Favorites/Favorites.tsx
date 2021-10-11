import styled from 'styled-components';
import { ProfileBar } from 'components';
import { useSelector } from 'react-redux';
import { selectors } from 'store';
import { FavoriteStockCard } from './components';

const Container = styled.div`
  display: flex;
  flex-grow: 3;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.white};
  margin: -8px;
  margin-left: 12px;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  height: 85vh;

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

  return (
    <Container>
      <ProfileBar />
      <Cards>
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
      </Cards>

    </Container>
  );
}
