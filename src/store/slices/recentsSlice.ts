import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState : Set<string> = new Set();

export const recentsSlice = createSlice({
  name: 'recents',
  initialState,
  reducers: {
    add(state, action : PayloadAction<string>) {
      state.add(action.payload);
    },
    remove(state, action : PayloadAction<string>) {
      if (state.has(action.payload)) state.delete(action.payload);
    },
  },
});

export default recentsSlice.reducer;
