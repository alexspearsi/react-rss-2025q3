import { configureStore } from '@reduxjs/toolkit';
import userFormReducer from './form/formSlice';

export const store = configureStore({
  reducer: {
    userForm: userFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
