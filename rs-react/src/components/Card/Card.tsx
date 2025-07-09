import './Card.css';
import { Component } from 'react';
import type { Character } from '../../types/character';

type Props = {
  character: Character;
};

class Card extends Component<Props> {
  getGenderColor = (gender: string) => {
    switch (gender) {
      case 'Male':
        return 'male';
      case 'Female':
        return 'female';
      default:
        return '';
    }
  };

  getSpeciesColor = (species: string) => {
    switch (species) {
      case 'Human':
        return 'human';
      case 'Alien':
        return 'alien';
      default:
        return '';
    }
  };

  render() {
    const { character } = this.props;

    return (
      <div className="card">
        <div className="card__item">
          <img className="avatar" src={character.image} alt={character.name} />
        </div>
        <div className="card__description">
          <h2 className="card__title">{character.name}</h2>
          <p className="card__traits">
            <span
              className={`card__trait ${this.getSpeciesColor(character.species)}`}
            >
              {character.species}
            </span>
            <span
              className={`card__trait ${this.getGenderColor(character.gender)}`}
            >
              {character.gender}
            </span>
          </p>
          <div className="card__row">
            <img src="/icons/alive-status.svg" alt="Status icon" />
            <p>{character.status}</p>
          </div>
          <div className="card__row">
            <img src="/icons/location.svg" alt="Location icon" />
            <p>{character.origin.name}</p>
          </div>
          <div className="card__row">
            <img src="/icons/episodes.svg" alt="Created icon" />
            <p>{new Date(character.created).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
