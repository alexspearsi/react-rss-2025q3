import styles from './SelectedItemsFlyout.module.css';
import { useCardStore } from '../../store/store'

export function SelectedItemsFlyout() {
  const selectedItems = useCardStore((state) => state.selectedItems);
  const clearItems = useCardStore((store) => store.clearItems)

  if (selectedItems.length === 0) return null;

  return (
    <div className={styles.flyout}>
      {selectedItems.length} item{selectedItems.length > 1 ? 's' : ''} selected
      <button className={styles.button} onClick={clearItems}>Unselect All</button>
    </div>
  )
}