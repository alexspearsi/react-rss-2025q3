'use client';

import styles from './Card.module.css';

import type { Character } from '../../types/character';
import { Card } from './Card';
import { CardSkeleton } from '../Skeleton/CardSkeleton';
import { Spinner } from '../Spinner/Spinner';
import { useTranslations } from 'next-intl';

type Props = {
  characters: Character[];
  onCardClick: (c: Character) => void;
  isFetching?: boolean;
  isLoading?: boolean;
  isError?: boolean;
}

export function CardList({ characters, onCardClick, isFetching, isLoading, isError }: Props) {
  const t = useTranslations('HomePage');

  if (isError) {
    return <div className={styles.nothing_found}>{t('nothing_found')}</div>
  }

  if (isLoading) {
    return <Spinner />
  }

  if (isFetching) {
    return Array.from({length: 10}).map((_, i) => <CardSkeleton key={i} />)
  }

  if (!characters.length) {
    return <div className={styles.nothing_found}>{t('nothing_found')}</div>
  }

  return (
    <>
      {characters.map(c => (
        <Card key={c.id} character={c} onClick={() => onCardClick(c)} />
      ))}
    </>
  )
}