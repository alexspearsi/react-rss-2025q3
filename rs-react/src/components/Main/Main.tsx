import React from 'react';
import styles from './Main.module.css';

type Props = {
  children: React.ReactNode;
  showNothingFound?: boolean;
};

export function Main({ children, showNothingFound = false }: Props) {
  return (
    <main className={styles.main}>
      {showNothingFound ? (
        <p className={styles.nothing_found}>
          We searched the multiverse... and found nothing
        </p>
      ) : ( children )}
    </main>
  );
}
