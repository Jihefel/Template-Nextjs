import { configureStore } from '@reduxjs/toolkit';

import sliceName from '../features/navbar/isConnectedSlice';

export const store = configureStore({
  reducer: {
    name: sliceName,
  }
});