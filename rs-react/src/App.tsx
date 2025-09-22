import styles from './components/Card/Card.module.css';

import { Main } from './components/Main/Main';
import { Pagination } from './components/Pagination/Pagination';
import type { Character } from './types/character';
import { Header } from './components/Header/Header';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CardDescription } from './components/Card/CardDescription';
import { CardTrait } from './components/Card/CardTrait';
import { CardDetail } from './components/Card/CardDetail';
import { SelectedItemsFlyout } from './components/SelectedItemsFlyout/SelectedItemsFlyout';
import { useGetCharactersQuery } from './state/characters/charactersApiSlice';
import { CardList } from './components/Card/CardList';


export function App() {
  const [submittedQuery, setSubmittedQuery] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [totalPages, setTotalPages] = useState(1);

  const page = Number(searchParams.get('page') ?? '1');

  useEffect(() => {
    const queryFromStorage = localStorage.getItem('query') ?? '';
    setSubmittedQuery(queryFromStorage);
  }, []);

  const { data, isLoading, isFetching, isError } = useGetCharactersQuery({ name: submittedQuery ?? '', page: page });

  useEffect(() => {
    if (data?.info?.pages) {
      setTotalPages(data.info.pages)
    }
  }, [data])

  const handleSearchSubmit = (query: string) => {
    const trimmedQuery = query.trim();
    localStorage.setItem('query', trimmedQuery);
    setSubmittedQuery(trimmedQuery);
    setSearchParams({ page: '1' });
  };

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: String(newPage) });
  };

  const handleCardClick = (character: Character) => {
    setSelectedCharacter(character);
  }

  const { gender, species, status, origin, created } = selectedCharacter ?? {};


  return (
    <>
      <Header onSearchSubmit={handleSearchSubmit} />
      <div id='main'>
        <div id='side-bar'>
          <Main>
            <CardList
              characters={data?.results ?? []}
              onCardClick={handleCardClick}
              isFetching={isFetching}
              isLoading={isLoading}
              isError={isError}
            />
          </Main>

          {selectedCharacter && (
            <div id='detail'>
              <CardDescription>
                <p className={styles.card_traits}>
                  <CardTrait
                    type='species'
                    value={species ?? ''}
                  />
                  <CardTrait type='gender' value={gender ?? ''} />
                </p>

                <CardDetail icon='status' text={status ?? ''} />
                <CardDetail
                  icon='location'
                  text={origin?.name ?? ''}
                />
                <CardDetail
                  icon='creation'
                  text={new Date(created ?? '').toLocaleDateString()}
                />
              </CardDescription>
            </div>
          )}
        </div>
      </div>

      {totalPages < 2 ? null : (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      {<SelectedItemsFlyout />}
    </>
  );
}
