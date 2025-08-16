import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Character } from '../../types/character';

const BASE_URL = 'https://rickandmortyapi.com/api';

type CharacterResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

export const charactersApiSlice = createApi({
  reducerPath: 'characters',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => {
    return {
      getCharacters: builder.query<CharacterResponse, { name: string, page: number }>({
        query: ({ name, page }) => `/character/?name=${name}&page=${page}`
      })
    }
  }
})

export const { useGetCharactersQuery } = charactersApiSlice;