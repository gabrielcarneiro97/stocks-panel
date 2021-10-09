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

export default function Recents() {
  return (
    <Container>
      <Header>
        <FiBarChart2 size={18} color={theme.colors.primary} style={{ marginRight: 3 }} />
        {' '}
        Empresas Recentes
      </Header>

      <Cards>
        <StockCard />
        <StockCard />
        <StockCard />
        <StockCard />
        <StockCard />
        <StockCard />
        <StockCard />
        <StockCard />
      </Cards>
    </Container>
  );
}
