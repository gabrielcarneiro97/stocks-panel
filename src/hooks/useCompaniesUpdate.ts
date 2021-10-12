import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, RootState } from 'store';
import { iexApi } from 'store/apis/iexApi';

export default function useCompaniesUpdate() {
  const state = useSelector<RootState, RootState>((s) => s);
  const dispatch = useDispatch();

  const [getCompanies, companiesRes] = iexApi.useLazyGetCompaniesBySymbolsQuery();
  const [getChartData] = iexApi.useLazyGetChartDataBySymbolQuery();

  useEffect(() => {
    const companies = [...state.favorites.arr, ...state.recents.arr];

    const interval = setInterval(() => {
      if (companies.length > 0) getCompanies(companies);
    }, 10 * 1000);

    return () => clearInterval(interval);
  }, [state]);

  useEffect(() => {
    if (companiesRes.isSuccess) {
      companiesRes.data.forEach((comp) => {
        const companyState = state.companies[comp.symbol];
        dispatch(actions.companies.set({
          ...companyState,
          ...comp,
        }));
      });
    }
  }, [companiesRes]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (state.chart.active) getChartData(state.chart.active);
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, [state.chart]);
}
