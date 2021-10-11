import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface RecentsState {
  arr: string[]
}

const initialState : RecentsState = {
  arr: [],
};

export const recentsSlice = createSlice({
  name: 'recents',
  initialState,
  reducers: {
    add(state, action : PayloadAction<string>) {
      if (!state.arr.includes(action.payload)) state.arr.unshift(action.payload);
    },
    remove(state, action : PayloadAction<string>) {
      state.arr = state.arr.filter((el) => el !== action.payload);
    },
  },
});

export const recentsSelectors = {
  getCompanies(state : RootState) {
    return state.recents.arr.map((symbol) => state.companies[symbol]);
  },
};

export default recentsSlice.reducer;
