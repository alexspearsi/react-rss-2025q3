import styles from './Card.module.css';

import { useDispatch, useSelector } from 'react-redux';

import { CardImage } from './CardImage';
import { CardTitle } from './CardTitle';
import type { RootState } from '../../state/store';
import { addCharacter } from '../../state/counter/counterSlice';
import type { Character } from '../../types/character';

type Props = {
  character: Character,
  onClick?: () => void;
};

export function Card({ character, onClick }: Props) {
  const dispatch = useDispatch();

  const selectedCharacters = useSelector((store: RootState) => store.counter.listOfCharacters);

  const isChecked = selectedCharacters.some((item) => item.id === character.id);

  return (
    <div data-testid='card' className={styles.card} onClick={onClick}>
      <input 
        type="checkbox"
        checked={isChecked}
        onClick={(e) => e.stopPropagation()}
        onChange={() => dispatch(addCharacter(character))}
      />
      <CardImage image={character.image} name={character.name} />

      <CardTitle>{character.name}</CardTitle>
    </div>
  );
}
