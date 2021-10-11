import { FiStar } from 'react-icons/fi';
import { Button, Tooltip } from 'components';
import { useDispatch } from 'react-redux';
import { actions } from 'store';

type Props = {
  symbol : string;
}

export default function AddToFavButton(props : Props) {
  const { symbol } = props;
  const dispatch = useDispatch();

  const handleClick = (e : any) => {
    if (e && e.stopPropagation) e.stopPropagation();
    dispatch(actions.favorites.add(symbol));
  };

  return (
    <Tooltip content="Favoritar">
      <Button onClick={handleClick} variant="white"><FiStar size={24} /></Button>
    </Tooltip>
  );
}
