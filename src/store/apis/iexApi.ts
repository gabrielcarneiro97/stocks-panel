import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { actions, RootState } from 'store';
import { Company } from '../slices/companiesSlice';

const TOKEN = 'Tpk_69c194138e45487194bbb5d37ecb1896';

export const iexApi = createApi({
  reducerPath: 'iexApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://sandbox.iexapis.com/stable/' }),
  endpoints: (builder) => ({
    getCompanyBySymbol: builder.query<Company, string>({
      keepUnusedDataFor: 10,
      query: (symbol) => `stock/${symbol}/quote?token=${TOKEN}`,
      transformResponse: ({ data } : { data : any }) => ({
        name: data.companyName,
        symbol: data.symbol,
        lastPrice: data.lastPrice,
        changeValue: data.change,
        changePercent: data.changePercent,
      }),
      onCacheEntryAdded: (arg, { getCacheEntry, dispatch, getState }) => {
        const company = getCacheEntry().data;
        const state : RootState = getState() as any;
        if (company) {
          const stateCompany = state.companies[company.symbol];
          dispatch(actions.companies.set({
            ...stateCompany,
            ...company,
          }));
        }
      },
    }),
    getLogoBySymbol: builder.query<string, string>({
      query: (symbol) => `stock/${symbol}/logo?token=${TOKEN}`,
      transformResponse: ({ data } : { data : any }) => data.url,
      onCacheEntryAdded: (symbol, { getCacheEntry, dispatch, getState }) => {
        const logoSrc = getCacheEntry().data;
        const state : RootState = getState() as any;
        if (logoSrc) {
          const stateCompany = state.companies[symbol];
          dispatch(actions.companies.set({
            logoSrc,
            ...stateCompany,
          }));
        }
      },
    }),
  }),
});

export default iexApi.reducer;
