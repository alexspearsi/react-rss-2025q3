import './Card.css';
import { CardImage } from './CardImage';
import { CardTitle } from './CardTitle';
import type { Character } from '../../types/character';

type Props = {
  character: Character;
  onClick?: () => void;
};

export function Card({ character, onClick }: Props) {
  return (
    <div data-testid="card" className="card" onClick={onClick}>
      <CardImage image={character.image} name={character.name} />

      <CardTitle>{character.name}</CardTitle>
    </div>
  );
}
