import { createSlice } from '@reduxjs/toolkit';
import { countriesList } from '../../utils/countriesList';

const countriesSlcie = createSlice({
  name: 'countries',
  initialState: countriesList,
  reducers: {},
});

export default countriesSlcie.reducer;
