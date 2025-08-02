import { Main } from './components/Main/Main';
import { Card } from './components/Card/Card';
import { Spinner } from './components/Spinner/Spinner';
import { Pagination } from './components/Pagination/Pagination';
import type { Character } from './types/character';
import { Header } from './components/Header/Header';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CardDescription } from './components/Card/CardDescription';
import { CardTrait } from './components/Card/CardTrait';
import { CardDetail } from './components/Card/CardDetail';

const BASE_URL = 'https://rickandmortyapi.com/api/character/';

export function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [submittedQuery, setSubmittedQuery] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const page = Number(searchParams.get('page') ?? '1');

  const fetchCharacters = async (query: string, page: number) => {
    setIsLoading(true);

    try {
      const url = new URL(BASE_URL);
      url.searchParams.set('name', query);
      url.searchParams.set('page', String(page));

      const response = await fetch(url.toString());
      const data = await response.json();
      setCharacters(data.results ?? []);
      setTotalPages(data.info?.pages ?? 1);
    } catch {
      setCharacters([]);
      setTotalPages(1);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const queryFromStorage = localStorage.getItem('query') ?? '';
    setSubmittedQuery(queryFromStorage);
  }, []);

  useEffect(() => {
    if (submittedQuery !== null) {
      fetchCharacters(submittedQuery, page);
    }
  }, [submittedQuery, page]);

  const handleSearchSubmit = (query: string) => {
    const trimmedQuery = query.trim();
    localStorage.setItem('query', trimmedQuery);
    setSubmittedQuery(trimmedQuery);
    setSearchParams({ page: '1' });
  };

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: String(newPage) });
  };

  if (hasError) {
    throw new Error('The button was clicked');
  }

  const handleCardClick = (character: Character) => {
    setSelectedCharacter(character);
  };

  return (
    <>
      <Header onSearchSubmit={handleSearchSubmit} />
      <div id='main'>
        <div id='side-bar'>
          <Main onErrorButtonClick={() => setHasError(true)}>
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                {characters.map((character, index) => (
                  <Card
                    key={index}
                    character={character}
                    onClick={() => handleCardClick(character)}
                  />
                ))}
              </>
            )}
          </Main>

          {selectedCharacter && (
            <div id='detail'>
              <CardDescription>
                <p className='card__traits'>
                  <CardTrait
                    type='species'
                    value={selectedCharacter?.species ?? ''}
                  />
                  <CardTrait type='gender' value={selectedCharacter.gender} />
                </p>

                <CardDetail icon='status' text={selectedCharacter.status} />
                <CardDetail
                  icon='location'
                  text={selectedCharacter.origin.name}
                />
                <CardDetail
                  icon='creation'
                  text={new Date(
                    selectedCharacter.created
                  ).toLocaleDateString()}
                />
              </CardDescription>
            </div>
          )}
        </div>
      </div>
      {!isLoading && characters.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
}
