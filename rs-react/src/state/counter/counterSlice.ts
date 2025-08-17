import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Character } from '../../types/character';

type State = {
  listOfCharacters: Character[]
}

const initialState: State = {
  listOfCharacters: []
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCharacter: (state, action: PayloadAction<Character>) => {
      const character = action.payload;
      const exists = state.listOfCharacters.some(c => c.id === character.id);
      state.listOfCharacters = exists
        ? state.listOfCharacters.filter(c => c.id !== character.id)
        : [...state.listOfCharacters, character];
    },

    clearCharacters: (state) => {
      state.listOfCharacters = [];
    }
  }
})

export const { addCharacter, clearCharacters } = counterSlice.actions;

export default counterSlice.reducer;