import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface Company {
  name: string;
  symbol: string;
  latestPrice: number;
  changeValue: number;
  changePercent: number;
  logoSrc?: string;
  chartData?: object;
}

export interface CompaniesState {
  [key: string]: Company;
}

const initialState : CompaniesState = {};

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    set(state, action : PayloadAction<Company>) {
      const { payload } = action;
      state[payload.symbol] = payload;
    },
    remove(state, action : PayloadAction<string>) {
      delete state[action.payload];
    },
  },
});

export const companiesSelectors = {
  getCompany(symbol : string) {
    return (state : RootState) => state.companies[symbol];
  },
};

export default companiesSlice.reducer;
