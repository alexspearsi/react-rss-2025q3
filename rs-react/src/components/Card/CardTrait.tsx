import clsx from 'clsx';
import styles from './Card.module.css';

type TraitType = 'gender' | 'species';

type Gender = 'Male' | 'Female' | 'Genderless' | 'unknown';
type Species = string;

type Props = {
  type: TraitType;
  value: Gender | Species;
};

function getClass(value: string, type: string) {
  return (type === 'gender' || type === 'species') ? value.toLowerCase() : '';
}

export function CardTrait({ value, type }: Props) {
  return (
    <span className={clsx(styles.card_trait, styles[getClass(value, type)])}>{value}</span>
  );
}
