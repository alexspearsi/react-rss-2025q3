'use client';

import styles from './Header.module.css';

import { Button } from '../Button/Button';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/navigation';

type Props = {
  onSearchSubmit: (query: string) => void;
};

export function Header({ onSearchSubmit }: Props) {
  const [inputValue, setInputValue] = useLocalStorage('query', '');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearchSubmit(inputValue);
  };

  const t = useTranslations('HomePage');

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSearchClick}>
        <input
          type='text'
          className={styles.input}
          placeholder={t('placeholder')}
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button className={styles.button}>{t('search')}</Button>
      </form>
      <Link href='/about'>
        <Button className={styles.button}>{t('about')}</Button>
      </Link>
    </header>
  );
}
