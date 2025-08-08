import styles from './SelectedItemsFlyout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../state/store';
import { clearCharacters } from '../../state/counter/counterSlice';

export function SelectedItemsFlyout() {
  const dispatch = useDispatch();

  const selectedCharacters = useSelector((store: RootState) => store.counter.listOfCharacters);

  if (selectedCharacters.length === 0) return null;

  return (
    <div className={styles.flyout}>
      {selectedCharacters.length} item{selectedCharacters.length > 1 ? 's' : ''} selected
      <button className={styles.button} onClick={() => dispatch(clearCharacters())}>Unselect All</button>
    </div>
  )
}