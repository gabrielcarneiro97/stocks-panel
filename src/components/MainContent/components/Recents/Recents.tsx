import { FiBarChart2 } from 'react-icons/fi';
import styled from 'styled-components';
import { StockCard } from '../../..';
import theme from '../../../../Theme';

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`;

const Cards = styled.div`
  display: flex;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.gray002};
    border-radius: 10px;
    cursor: pointer;

  }

  & > * {
    /* float: left; */
    min-width: 320px;
    margin: 16px;
  }
`;

// const cards = [{
//   id: 0,
// }, {
//   id: 1,
// }, {
//   id: 2,
// }, {
//   id: 3,
// }, {
//   id: 4,
// }, {
//   id: 5,
// }, {
//   id: 6,
// }];

const cardWithMarginWidth = 384;

export default function Recents() {
  return (
    <Container>
      <Header>
        <div>
          <FiBarChart2 size={18} color={theme.colors.primary} style={{ marginRight: 3 }} />
          {' '}
          Empresas Recentes
        </div>

      </Header>

      <Cards onScroll={(e) => {
        const cardsQnt = e.currentTarget.scrollWidth / cardWithMarginWidth;
        console.log(
          cardsQnt - (
            e.currentTarget.scrollWidth - e.currentTarget.scrollLeft) / cardWithMarginWidth,
        );

        console.log(
          e.currentTarget.scrollWidth - e.currentTarget.scrollLeft === e.currentTarget.offsetWidth,
        );

        // fim do scroll:
        // e.currentTarget.scrollWidth - e.currentTarget.scrollLeft === e.currentTarget.offsetWidth

        // início do scroll:
        // e.scrollLeft === 0
      }}
      >
        <StockCard />
        <StockCard />
        <StockCard />
        <StockCard />
        <StockCard />

      </Cards>
    </Container>
  );
}
