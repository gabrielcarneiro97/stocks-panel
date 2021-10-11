import { configureStore } from '@reduxjs/toolkit';
import companiesReducer, { companiesSelectors, companiesSlice } from './slices/companiesSlice';
import favoritesReducer, { favoritesSelectors, favoritesSlice } from './slices/favoritesSlice';
import recentsReducer, { recentsSelectors, recentsSlice } from './slices/recentsSlice';
import chartReducer, { chartSelectors, chartSlice } from './slices/chartSlice';

const store = configureStore({
  reducer: {
    companies: companiesReducer,
    favorites: favoritesReducer,
    recents: recentsReducer,
    chart: chartReducer,
  },
});

export default store;

export const actions = {
  companies: companiesSlice.actions,
  favorites: favoritesSlice.actions,
  recents: recentsSlice.actions,
  chart: chartSlice.actions,
};

export const selectors = {
  companies: companiesSelectors,
  favorites: favoritesSelectors,
  recents: recentsSelectors,
  chart: chartSelectors,
};

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
