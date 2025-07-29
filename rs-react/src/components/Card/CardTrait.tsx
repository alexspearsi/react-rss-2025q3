import './Card.css';

type TraitType = 'gender' | 'species';

type Gender = 'Male' | 'Female' | 'Genderless' | 'unknown';
type Species = string;

type Props = {
  type: TraitType;
  value: Gender | Species;
};

function getClass(value: string, type: string) {
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

export function CardTrait({ value, type }: Props) {
  return (
    <span className={`card__trait ${getClass(value, type)}`}>{value}</span>
  );
}
