import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserForm } from '../../validation/userFormSchema';

type UserState = {
  formData: UserForm | null;
};

const initialState: UserState = {
  formData: null,
};

const formSlice = createSlice({
  name: 'userForm',
  initialState,
  reducers: {
    saveUserData: (state, action: PayloadAction<UserForm>) => {
      state.formData = action.payload;
    },
  },
});

export const { saveUserData } = formSlice.actions;
export default formSlice.reducer;
