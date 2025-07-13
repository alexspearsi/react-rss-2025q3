import './Card.css';
import { Component } from 'react';

type TraitType = 'gender' | 'species';

type Gender = 'Male' | 'Female' | 'Genderless' | 'unknown';
type Species = string;

type Props = {
  type: TraitType;
  value: Gender | Species;
};

export class CardTrait extends Component<Props> {
  getClass(value: string, type: string) {
    if (type === 'gender') {
      if (value === 'Male') return 'male';
      if (value === 'Female') return 'female';
    }

    if (type === 'species') {
      if (value === 'Human') return 'human';
      if (value === 'Alien') return 'alien';
    }

    return '';
  }

  render() {
    const { value, type } = this.props;

    return (
      <span className={`card__trait ${this.getClass(value, type)}`}>
        {value}
      </span>
    );
  }
}
