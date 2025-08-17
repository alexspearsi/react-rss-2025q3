'use client';

import React from 'react';
import styles from './Main.module.css';

type Props = {
  children: React.ReactNode;
  showNothingFound?: boolean;
};

export function Main({ children }: Props) {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
}
