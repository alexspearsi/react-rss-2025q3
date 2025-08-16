'use client';

import styles from './Pagination.module.css';
import clsx from 'clsx';

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  return (
    <div className={styles.pagination}>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => onPageChange(pageNum)}
          disabled={pageNum === currentPage}
          className={clsx(pageNum === currentPage && styles.active)}
        >
          {pageNum}
        </button>
      ))}
    </div>
  );
}
