import './Header.css';
import { useState, useEffect, type Dispatch, type SetStateAction } from 'react';
import { Button } from '../Button/Button';

type Props = {
  onSearchSubmit: (query: string) => void;
};

function useLocalStorage(
  key: string,
  initialValue: string
): [string, Dispatch<SetStateAction<string>>] {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}

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
    <header className="header">
      <form className="header__form" onSubmit={handleSearchClick}>
        <input
          type="text"
          className="header__input"
          placeholder="Search by name..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button className="header__button">Search</Button>
      </form>
    </header>
  );
}
