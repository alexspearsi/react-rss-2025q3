import './Card.css';
import { CardImage } from './CardImage';
import { CardTitle } from './CardTitle';
import { CardDetail } from './CardDetail';
import { CardTrait } from './CardTrait';
import type { Character } from '../../types/character';
import { CardDescription } from './CardDescription';

type Props = {
  character: Character;
};

export function Card({ character }: Props) {
  return (
    <div data-testid="card" className="card">
      <CardImage image={character.image} name={character.name} />

      <CardDescription>
        <CardTitle>{character.name}</CardTitle>
        <p className="card__traits">
          <CardTrait type="species" value={character.species} />
          <CardTrait type="gender" value={character.gender} />
        </p>

        <CardDetail icon="status" text={character.status} />
        <CardDetail icon="location" text={character.origin.name} />
        <CardDetail
          icon="creation"
          text={new Date(character.created).toLocaleDateString()}
        />
      </CardDescription>
    </div>
  )
}