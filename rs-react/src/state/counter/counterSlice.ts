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
      const isAlreadySelected = state.listOfCharacters.some(item => item.id === character.id);

      if (!isAlreadySelected) {
        state.listOfCharacters.push(character);
      }
    },
    clearCharacters: (state) => {
      state.listOfCharacters = [];
    }
  }
})

export const { addCharacter, clearCharacters } = counterSlice.actions;

export default counterSlice.reducer;