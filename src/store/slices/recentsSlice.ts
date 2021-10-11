import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface RecentsState {
  set: Set<string>;
}

const initialState : RecentsState = {
  set: new Set(),
};

export const recentsSlice = createSlice({
  name: 'recents',
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

export default recentsSlice.reducer;
