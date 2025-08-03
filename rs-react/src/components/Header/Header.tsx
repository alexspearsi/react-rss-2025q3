import styles from './Header.module.css'

import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';

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

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSearchClick}>
        <input
          type='text'
          className={styles.input}
          placeholder='Search by name...'
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button className={styles.button}>Search</Button>
      </form>
      <Link to='/about'>
        <Button className={styles.button}>About</Button>
      </Link>
    </header>
  );
}
