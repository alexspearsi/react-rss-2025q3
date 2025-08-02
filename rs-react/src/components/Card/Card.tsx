import './Card.css';
import { CardImage } from './CardImage';
import { CardTitle } from './CardTitle';
import type { Character } from '../../types/character';

type Props = {
  character: Character;
  onClick?: () => void;
};

export function Card({ character: { image, name }, onClick }: Props) {
  return (
    <div data-testid='card' className='card' onClick={onClick}>
      <CardImage image={image} name={name} />

      <CardTitle>{name}</CardTitle>
    </div>
  );
}
