import { FiTrash } from 'react-icons/fi';
import styled, { useTheme } from 'styled-components';
import { Button, StockCard } from 'components';
import { useDispatch } from 'react-redux';
import { actions } from 'store';
import { toast } from 'react-toastify';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin-left: 12px;
  }
`;

type Props = {
  companyName: string;
  symbol: string;
  changeValue: number;
  logoSrc?: string;
}

export default function FavoriteStockCard(props : Props) {
  const {
    companyName, symbol, changeValue, logoSrc,
  } = props;
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleDelete = () => {
    dispatch(actions.favorites.remove(symbol));
    toast.warn(`Empresa "${symbol}" removida dos favoritos!`);
  };

  return (
    <Container>
      <StockCard
        companyName={companyName}
        symbol={symbol}
        changeValue={changeValue}
        logoSrc={logoSrc}
      />
      <Button variant="ghost" onClick={handleDelete}>
        <FiTrash color={theme.colors.gray002} size={20} />
      </Button>
    </Container>
  );
}

FavoriteStockCard.defaultProps = {
  logoSrc: undefined,
};
