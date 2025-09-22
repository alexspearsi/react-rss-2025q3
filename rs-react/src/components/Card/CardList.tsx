import styles from './Card.module.css';

import type { Character } from '../../types/character';
import { Card } from './Card';
import { Spinner } from '../Spinner/Spinner';

type Props = {
  characters: Character[];
  onCardClick: (c: Character) => void;
  isFetching?: boolean;
  isLoading?: boolean;
  isError?: boolean;
}

export function CardList({ characters, onCardClick, isFetching, isLoading, isError }: Props) {
  if (isError) {
    return <div className={styles.nothing_found}>We searched the multiverse... and found nothing</div>
  }

  if (isLoading) {
    return <Spinner />
  }

  if (isFetching) {
    return <div className={styles.fetching}>Updating...</div>
  }

  if (!characters.length) {
    return <div className={styles.nothing_found}>We searched the multiverse... and found nothing</div>
  }

  return (
    <>
      {characters.map(c => (
        <Card key={c.id} character={c} onClick={() => onCardClick(c)} />
      ))}
    </>
  )
}