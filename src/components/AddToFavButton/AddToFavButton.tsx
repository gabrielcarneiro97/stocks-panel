import { FiStar } from 'react-icons/fi';
import { Button, Tooltip } from '..';

type Props = {
  companyId : number;
}

export default function AddToFavButton(props : Props) {
  const { companyId } = props;

  const handleClick = () => console.log(companyId);

  return (
    <Tooltip content="Favoritar">
      <Button onClick={handleClick} variant="white"><FiStar size={24} /></Button>
    </Tooltip>
  );
}
