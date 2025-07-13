import './Card.css';
import { Component } from 'react';
import { CardImage } from './CardImage';
import { CardTitle } from './CardTitle';
import { CardDetail } from './CardRow';
import { CardTrait } from './CardTrait';
import type { Character } from '../../types/character';
import { CardDescription } from './CardDescription';

type Props = {
  character: Character;
};

export class Card extends Component<Props> {
  render() {
    const { name, image, species, gender, status, origin, created } =
      this.props.character;
      
    return (
      <div className="card">
        <CardImage image={image} name={name} />

        <CardDescription>
          <CardTitle>{name}</CardTitle>
          <p className="card__traits">
            <CardTrait type="species" value={species} />
            <CardTrait type="gender" value={gender} />
          </p>

          <CardDetail icon="status" text={status} />
          <CardDetail icon="location" text={origin.name} />
          <CardDetail
            icon="creation"
            text={new Date(created).toLocaleDateString()}
          />
        </CardDescription>
      </div>
    );
  }
}
