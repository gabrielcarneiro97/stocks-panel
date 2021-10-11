import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface FavoritesState {
  arr: string[]
}

const initialState : FavoritesState = {
  arr: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add(state, action : PayloadAction<string>) {
      if (!state.arr.includes(action.payload)) state.arr.push(action.payload);
    },
    remove(state, action : PayloadAction<string>) {
      state.arr = state.arr.filter((el) => el !== action.payload);
    },
  },
});

export const favoritesSelectors = {
  getCompanies(state : RootState) {
    return state.favorites.arr.map((symbol) => state.companies[symbol]);
  },
};

export default favoritesSlice.reducer;
