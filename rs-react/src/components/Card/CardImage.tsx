'use client';

import styles from './Card.module.css';
import Image from 'next/image';

type Props = {
  image: string;
  name: string;
};

export function CardImage({ image, name }: Props) {
  return (
    <div className={styles.image}>
      <Image
        className={styles.image_avatar}
        src={image}
        width={60}
        height={60}
        alt={`Picture of ${name}`}
      />
    </div>
  );
}
