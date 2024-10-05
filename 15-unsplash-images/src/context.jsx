import { useEffect } from 'react';
import { useState, createContext, useContext } from 'react';

const AppContext = createContext();

const initialDarkTheme = () => {
  const prefersDarkTheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  const storedDarkMode = localStorage.getItem('darkTheme');

  if (storedDarkMode === null) {
    return prefersDarkTheme;
  }
  // needs to be a string cuz local storage reads it as a string value
  return storedDarkMode === 'true';
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(initialDarkTheme());
  const [searchTerm, setSearchTerm] = useState('dog');
  // toogle func - not directly on setIsDarkTheme because there are more functionalities
  const toogleDark = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);

    localStorage.setItem('darkTheme', newTheme);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toogleDark, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
