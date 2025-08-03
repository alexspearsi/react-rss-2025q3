import styles from './Card.module.css';

import { CardImage } from './CardImage';
import { CardTitle } from './CardTitle';
import { useCardStore } from '../../store/store'

type Props = {
  character: {
    id: number;
    image: string;
    name: string;
  };
  onClick?: () => void;
};

export function Card({ character: { image, name, id }, onClick }: Props) {
  const selectedItems = useCardStore((state) => state.selectedItems);
  const toggleItem = useCardStore((state) => state.toggleItem);

  const isChecked = selectedItems.includes(String(id));

  return (
    <div data-testid='card' className={styles.card} onClick={onClick}>
      <input 
        type="checkbox"
        checked={isChecked}
        onClick={(e) => e.stopPropagation()}
        onChange={() => toggleItem(String(id))}
      />
      <CardImage image={image} name={name} />

      <CardTitle>{name}</CardTitle>
    </div>
  );
}
