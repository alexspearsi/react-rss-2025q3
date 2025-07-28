import { Main } from './components/Main/Main';
import { Card } from './components/Card/Card';
import { Spinner } from './components/Spinner/Spinner';
import type { Character } from './types/character';
import { Header } from './components/Header/Header';
import { useState, useEffect } from 'react';

const BASE_URL = 'https://rickandmortyapi.com/api/character/';

export function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [submittedQuery, setSubmittedQuery] = useState<string | null>(null);

  const fetchCharacters = async (query: string) => {
    setIsLoading(true);

    try {
      const url = new URL(BASE_URL);
      url.searchParams.set('name', query);

      const response = await fetch(url.toString())
      const data = await response.json();
      setCharacters(data.results || []);
    } catch {
      setCharacters([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const queryFromStorage = localStorage.getItem('query') ?? '';
    setSubmittedQuery(queryFromStorage);
  }, []);

  useEffect(() => {
    if (submittedQuery !== null) {
      fetchCharacters(submittedQuery)
    }
  }, [submittedQuery])

  const handleSearchSubmit = (query: string) => {
    const trimmedQuery = query.trim();
    localStorage.setItem('query', trimmedQuery);
    setSubmittedQuery(trimmedQuery);
  }

  if (hasError) {
    throw new Error('The button was clicked')
  }

  return (
    <div>
      <Header onSearchSubmit={handleSearchSubmit} />
      <Main onErrorButtonClick={() => setHasError(true)}>
        {isLoading ? (
          <Spinner />
        ) : (
          characters.map((character, index) => (
            <Card key={index} character={character} />
          ))
        )}
      </Main>
    </div>
  );
}