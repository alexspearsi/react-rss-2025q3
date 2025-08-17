'use client';

import styles from './SelectedItemsFlyout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../state/store';
import { clearCharacters } from '../../state/counter/counterSlice';
import { useTranslations } from 'next-intl';
import { downloadCSV } from '../../app/api/actions/downloadCSV';

export function SelectedItemsFlyout() {
  const t = useTranslations('SelectedItemsFlyout');

  const dispatch = useDispatch();

  const selectedCharacters = useSelector((store: RootState) => store.counter.listOfCharacters);

  if (selectedCharacters.length === 0) {
    return null;
  }

  
  return (
    <div className={styles.flyout}>
      {selectedCharacters.length} item{selectedCharacters.length > 1 ? 's' : ''} selected
      <div className={styles.actions}>
        <button className={styles.button} onClick={() => downloadCSV(selectedCharacters)}>{t('download')}</button>
        <button className={styles.button} onClick={() => dispatch(clearCharacters())}>{t('unselect')}</button>
      </div>
    </div>
  )
}

