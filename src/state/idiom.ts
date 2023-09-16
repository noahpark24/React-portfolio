import { createAction, createReducer } from '@reduxjs/toolkit';

export const setIdiom = createAction<string>('SET_IDIOM');

const initialState: string = 'ENG';

export default createReducer(initialState, (builder) => {
  builder.addCase(setIdiom, (state, action) => {
    return action.payload;
  });
});
