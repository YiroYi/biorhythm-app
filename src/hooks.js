import { useState } from 'react';

export function useLocalStorage(key, defaultValue) {
  const getInitialValue = () => localStorage.getItem(key) ?? defaultValue; //?? significa si la expresion anterior es null entonces has lo que sigue
  const[value, setValue] = useState(getInitialValue);
  const setAndStoreValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };
  return [value, setAndStoreValue];
}
