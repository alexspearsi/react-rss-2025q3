'use client';

import styles from './Button.module.css';

import clsx from 'clsx';
import { type ReactNode, type MouseEvent } from 'react';

type Props = {
  className: string;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export function Button({ className, children, onClick }: Props) {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  );
}
