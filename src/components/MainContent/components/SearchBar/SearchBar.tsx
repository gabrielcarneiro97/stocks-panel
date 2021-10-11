import { useRef } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Input, Button } from 'components';

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // @TODO: tratar a busca aqui
  };

  return (
    <Input
      placeholder="Buscar Empresa"
      addonAfter={<Button onClick={handleClick}><FiSearch size={18} /></Button>}
      ref={inputRef}
    />
  );
}
