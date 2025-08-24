import { configureStore } from '@reduxjs/toolkit';
import userFormReducer from './form/formSlice';
import countriesReducer from './countries/countriesSlice';

export const store = configureStore({
  reducer: {
    userForm: userFormReducer,
    countries: countriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
