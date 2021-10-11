import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { actions, RootState } from 'store';
import { ChartData, Company } from '../slices/companiesSlice';

const TOKEN = 'Tpk_69c194138e45487194bbb5d37ecb1896';

export const iexApi = createApi({
  reducerPath: 'iexApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://sandbox.iexapis.com/stable/' }),
  endpoints: (builder) => ({
    getCompanyBySymbol: builder.query<Company, string>({
      keepUnusedDataFor: 10,
      query: (symbol) => `stock/${symbol}/quote?token=${TOKEN}`,
      transformResponse: (data : any) => ({
        name: data.companyName,
        symbol: data.symbol,
        latestPrice: data.latestPrice,
        changeValue: data.change,
        changePercent: data.changePercent,
      }),
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
      query: (symbol) => `/stock/${symbol}/chart/dynamic?token=${TOKEN}&chartSimplify=true&chartLast=20`,
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
  }),
});

export default iexApi.reducer;
