import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface FavoritesState {
  set: Set<string>;
}

const initialState : FavoritesState = {
  set: new Set(),
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add(state, action : PayloadAction<string>) {
      state.set.add(action.payload);
    },
    remove(state, action : PayloadAction<string>) {
      if (state.set.has(action.payload)) state.set.delete(action.payload);
    },
  },
});

export const favoritesSelectors = {
  getCompanies(state : RootState) {
    return Array.from(state.favorites.set).map((symbol) => state.companies[symbol]);
  },
};

export default favoritesSlice.reducer;
