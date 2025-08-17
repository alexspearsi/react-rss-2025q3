'use client';

import styles from './Card.module.css';
import Image from 'next/image';

type Props = {
  icon: 'status' | 'location' | 'creation';
  text: string;
};

export function CardDetail({ icon, text }: Props) {
  return (
    <div className={styles.card_row}>
      <Image 
        src={`/icons/${icon}.svg`} 
        alt={`${icon} icon`}
        width={20}
        height={20}
       />
      <p>{text}</p>
    </div>
  );
}
