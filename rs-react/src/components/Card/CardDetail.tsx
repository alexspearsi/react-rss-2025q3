'use client';

import styles from './Card.module.css';

type Props = {
  icon: 'status' | 'location' | 'creation';
  text: string;
};

export function CardDetail({ icon, text }: Props) {
  return (
    <div className={styles.card_row}>
      <img src={`/icons/${icon}.svg`} alt={`${icon} icon`} />
      <p>{text}</p>
    </div>
  );
}
