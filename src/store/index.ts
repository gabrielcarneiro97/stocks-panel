import { configureStore } from '@reduxjs/toolkit';
import companiesReducer, { companiesSlice } from './slices/companiesSlice';
import favoritesReducer, { favoritesSelectors, favoritesSlice } from './slices/favoritesSlice';
import recentsReducer, { recentsSlice } from './slices/recentsSlice';

const store = configureStore({
  reducer: {
    companies: companiesReducer,
    favorites: favoritesReducer,
    recents: recentsReducer,
  },
});

export default store;

export const actions = {
  companies: companiesSlice.actions,
  favorites: favoritesSlice.actions,
  recents: recentsSlice.actions,
};

export const selectors = {
  favorites: favoritesSelectors,
};

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
