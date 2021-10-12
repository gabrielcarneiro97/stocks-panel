import { useEffect, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Input, Button } from 'components';
import { iexApi } from 'store/apis/iexApi';
import { useDispatch } from 'react-redux';
import { actions } from 'store';
import { toast } from 'react-toastify';

export default function SearchBar() {
  const [getCompany, companyResult] = iexApi.useLazyGetCompanyBySymbolQuery();
  const [getLogo, logoResult] = iexApi.useLazyGetLogoBySymbolQuery();

  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);
  const [symbol, setSymbol] = useState('');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (symbol) getCompany(symbol);
  }, [symbol]);

  useEffect(() => {
    if (companyResult.isLoading || companyResult.isFetching) return;

    if (companyResult.isSuccess) {
      getLogo(symbol);
      return;
    }
    if (companyResult.isError) {
      toast.error('Empresa não encontrada!');
      setDisabled(false);
      setSymbol('');
    }
  }, [companyResult]);

  useEffect(() => {
    if (logoResult.isLoading || logoResult.isFetching) return;
    if (logoResult.isSuccess) {
      dispatch(actions.chart.clean());
      dispatch(actions.chart.set(symbol));
      dispatch(actions.recents.add(symbol));
    }
    setDisabled(false);
    setSymbol('');
  }, [logoResult]);

  const handleClick = () => {
    setSymbol(inputRef.current?.value.toUpperCase() ?? '');
    setDisabled(true);
  };

  return (
    <Input
      placeholder="Buscar Empresa"
      addonAfter={<Button disabled={disabled} onClick={handleClick}><FiSearch size={18} /></Button>}
      ref={inputRef}
    />
  );
}
