import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Company {
  name: string;
  symbol: string;
  lastPrice: number;
  change: number;
  changePercent: number;
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
    add(state, action : PayloadAction<Company>) {
      const { payload } = action;
      state[payload.symbol] = payload;
    },
    remove(state, action : PayloadAction<string>) {
      delete state[action.payload];
    },
  },
});

export default companiesSlice.reducer;
