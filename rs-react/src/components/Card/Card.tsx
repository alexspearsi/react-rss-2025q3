import styles from './Card.module.css';

import { CardImage } from './CardImage';
import { CardTitle } from './CardTitle';
import { useCardStore } from '../../store/store'

type Props = {
  character: {
    id: string;
    image: string;
    name: string;
  };
  onClick?: () => void;
};

export function Card({ character: { image, name, id }, onClick }: Props) {
  return (
    <div data-testid='card' className={styles.card} onClick={onClick}>
      <input 
        type="checkbox"
        onClick={(e) => e.stopPropagation()}
      />
      <CardImage image={image} name={name} />

      <CardTitle>{name}</CardTitle>
    </div>
  );
}
