import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

export function useLocalStorage(
  key: string,
  initialValue: string
): [string, Dispatch<SetStateAction<string>>] {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) ?? initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}