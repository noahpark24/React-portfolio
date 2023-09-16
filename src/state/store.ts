import { configureStore } from '@reduxjs/toolkit';
import idiomReducer from './idiom';

const store = configureStore({
  reducer: {
    idiom: idiomReducer,
  },
});

export default store;
