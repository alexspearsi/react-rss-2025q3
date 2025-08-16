import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice'
import { charactersApiSlice } from './characters/charactersApiSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [charactersApiSlice.reducerPath]: charactersApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(charactersApiSlice.middleware);
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;