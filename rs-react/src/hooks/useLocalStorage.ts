import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

export function useLocalStorage(
  key: string,
  initialValue: string
): [string, Dispatch<SetStateAction<string>>] {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored !== null) {
      setValue(stored);
    }
  }, [key])

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value])

  return [value, setValue]
}