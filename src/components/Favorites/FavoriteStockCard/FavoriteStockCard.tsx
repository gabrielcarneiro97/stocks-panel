import { FiTrash } from 'react-icons/fi';
import styled, { useTheme } from 'styled-components';
import { Button, StockCard } from '../..';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin-left: 12px;
  }
`;

export default function FavoriteStockCard() {
  const theme = useTheme();

  return (
    <Container>
      <StockCard />
      <Button variant="ghost">
        <FiTrash color={theme.colors.gray002} size={20} />
      </Button>
    </Container>
  );
}
