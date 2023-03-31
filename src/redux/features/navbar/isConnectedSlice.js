import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const sliceName = createSlice({
  name: 'name',
  initialState,
  reducers: {
    reducerName: (state, action) => {
      state.status = true
    },
  },
});

export const { reducerName } = sliceName.actions;

export default sliceName.reducer;