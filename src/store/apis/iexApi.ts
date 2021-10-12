import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { actions, RootState } from 'store';
import { ChartData, Company } from '../slices/companiesSlice';

const TOKEN = 'pk_033317161d4e4f25ac1120d1e7b87ed7';

const quoteToCompany : (quote : any) => Company = (quote) => ({
  name: quote.companyName,
  symbol: quote.symbol,
  latestPrice: quote.latestPrice,
  changeValue: quote.change,
  changePercent: quote.changePercent,
});

export const iexApi = createApi({
  reducerPath: 'iexApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cloud.iexapis.com/stable/' }),
  endpoints: (builder) => ({
    getCompanyBySymbol: builder.query<Company, string>({
      keepUnusedDataFor: 10,
      query: (symbol) => `stock/${symbol}/quote?token=${TOKEN}`,
      transformResponse: quoteToCompany,
      onCacheEntryAdded: async (arg, {
        dispatch, getState, cacheDataLoaded,
      }) => {
        const company = (await cacheDataLoaded).data;
        const state : RootState = getState() as any;

        const stateCompany = state.companies[company.symbol];
        dispatch(actions.companies.set({
          ...stateCompany,
          ...company,
        }));
      },
    }),
    getLogoBySymbol: builder.query<string, string>({
      query: (symbol) => `stock/${symbol}/logo?token=${TOKEN}`,
      transformResponse: (data : any) => data.url,
      onCacheEntryAdded: async (symbol, { dispatch, getState, cacheDataLoaded }) => {
        const logoSrc = (await cacheDataLoaded).data;
        const state : RootState = getState() as any;
        const stateCompany = state.companies[symbol.toUpperCase()];
        dispatch(actions.companies.set({
          ...stateCompany,
          symbol: symbol.toUpperCase(),
          logoSrc,
        }));
      },
    }),
    getChartDataBySymbol: builder.query<ChartData[], string>({
      query: (symbol) => `/stock/${symbol}/chart/dynamic?token=${TOKEN}&chartLast=20`,
      keepUnusedDataFor: 0,
      transformResponse: (response : any) => response.data.map(
        (r : any) => ({ label: r.label, value: r.close }),
      ),
      onCacheEntryAdded: async (symbol, { dispatch, getState, cacheDataLoaded }) => {
        const chartData = (await cacheDataLoaded).data;
        const state : RootState = getState() as any;
        const stateCompany = state.companies[symbol.toUpperCase()];
        dispatch(actions.companies.set({
          ...stateCompany,
          symbol: symbol.toUpperCase(),
          chartData,
        }));
      },
    }),
    getCompaniesBySymbols: builder.query<Company[], string[]>({
      query: (symbols) => `/stock/market/batch?token=${TOKEN}&symbols=${symbols.join(',')}&types=quote`,
      keepUnusedDataFor: 0,
      transformResponse: (response : any) => Object.keys(response).map(
        (symbol : string) => quoteToCompany(response[symbol].quote),
      ),
    }),
  }),
});

export default iexApi.reducer;
