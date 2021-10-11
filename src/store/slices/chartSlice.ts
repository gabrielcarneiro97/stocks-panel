import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface ChartState {
  active?: string;
}

const initialState : ChartState = {
  active: undefined,
};

export const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    set(state, action : PayloadAction<string>) {
      state.active = action.payload;
    },
    clean(state) {
      state.active = undefined;
    },
  },
});

export const chartSelectors = {
  active(state : RootState) {
    return state.chart.active ? state.companies[state.chart.active] : null;
  },
};

export default chartSlice.reducer;
